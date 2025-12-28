import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type EmailBody = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function isEmailBody(obj: any): obj is EmailBody {
  return (
    obj &&
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    typeof obj.message === "string"
  );
}

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (!isEmailBody(body)) {
    return new Response("Missing required fields", { status: 400 });
  }

  const { name, email, subject = "", message } = body;

  try {
    // Send email to owner
    await sgMail.send({
      to: process.env.OWNER_EMAIL!,
      from: process.env.SENDER_EMAIL!,
      subject: `New message from ${name}: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    // Optional: confirmation to user
    await sgMail.send({
      to: email,
      from: process.env.SENDER_EMAIL!,
      subject: "Thanks for contacting us",
      text: `Hi ${name}, we received your message:\n\n${message}`,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("SendGrid error:", err);
    return new Response("Error sending email", { status: 500 });
  }
}
