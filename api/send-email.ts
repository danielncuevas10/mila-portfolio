
type SendBody = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function isSendBody(x: unknown): x is SendBody {
  return (
    typeof x === "object" &&
    x !== null &&
    typeof (x as any).name === "string" &&
    typeof (x as any).email === "string" &&
    typeof (x as any).message === "string"
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!isSendBody(body)) {
      return new Response("Missing fields", { status: 400 });
    }

    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_OWNER = process.env.EMAILJS_TEMPLATE_OWNER;
    const TEMPLATE_USER = process.env.EMAILJS_TEMPLATE_USER;
    const USER_ID = process.env.EMAILJS_USER_ID; // EmailJS user/public id
    const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "";

    if (!SERVICE_ID || !TEMPLATE_OWNER || !TEMPLATE_USER || !USER_ID) {
      console.error("Missing EmailJS env vars", { SERVICE_ID, TEMPLATE_OWNER, TEMPLATE_USER, USER_ID });
      return new Response("Server not configured", { status: 500 });
    }

    const templateParams = {
      name: body.name,
      email: body.email,
      subject: body.subject ?? "",
      message: body.message,
      owner_email: OWNER_EMAIL, // optional if your template uses it
    };

    // 1) send to owner
    const ownerResp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_OWNER,
        user_id: USER_ID,
        template_params: templateParams,
      }),
    });

    if (!ownerResp.ok) {
      const text = await ownerResp.text();
      console.error("Owner send failed:", ownerResp.status, text);
      return new Response(`Owner send failed: ${text}`, { status: 502 });
    }

    // 2) send confirmation to user
    const userResp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_USER,
        user_id: USER_ID,
        template_params: templateParams, // ensure your user-template uses {{email}} or {{name}} as variables
      }),
    });

    if (!userResp.ok) {
      const text = await userResp.text();
      console.error("User send failed:", userResp.status, text);
      // owner already got it — return 207 or 200 with warning. I'll return 200 but report the issue.
      return new Response("Sent to owner; failed to send confirmation to user", { status: 200 });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response("Server error", { status: 500 });
  }
}

