// api/send-email.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    const { name, subject, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing fields" });
    }
  
    const service_id = process.env.VITE_EMAILJS_SERVICE_ID;
    const owner_template_id = process.env.VITE_EMAILJS_TEMPLATE_OWNER;
    const user_template_id = process.env.VITE_EMAILJS_TEMPLATE_USER;
    const user_id = process.env.VITE_EMAILJS_PUBLIC_KEY; // public/user id
  
    if (!service_id || !owner_template_id || !user_template_id || !user_id) {
      return res
        .status(500)
        .json({ message: "Email service not configured on server" });
    }
  
    const sendEmail = async (template_id, template_params) => {
      const resp = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id,
            template_id,
            user_id,
            template_params,
          }),
        }
      );
      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`EmailJS responded ${resp.status}: ${text}`);
      }
      return resp.json();
    };
  
    try {
      // 1) send to site owner (Mila)
      await sendEmail(owner_template_id, {
        from_name: name,
        from_email: email,
        subject,
        message,
      });
  
      // 2) send confirmation to user (optional)
      await sendEmail(user_template_id, {
        from_name: "Mila",
        to_name: name,
        to_email: email,
        message: "Thanks for your message — Mila will get back to you soon.",
      });
  
      return res.status(200).json({ message: "Emails sent" });
    } catch (err) {
      console.error("Email send error:", err);
      return res.status(500).json({ message: "EmailJS error", error: String(err) });
    }
  }
  