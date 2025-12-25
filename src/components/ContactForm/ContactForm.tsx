import { useState } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

type Props = {
  variant?: "english" | "default";
};

export default function ContactForm({ variant = "default" }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      subject: form.subject,
      email: form.email,
      message: form.message,
    };

    try {
      // Send email to Mila (owner)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send confirmation email to the user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setForm({ name: "", subject: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={`${styles.ContactForm} ${
        variant === "english" ? styles.english : ""
      }`}
      onSubmit={handleSubmit}
    >
      <h3>Your name:</h3>
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <h3>Subject:</h3>
      <input
        name="subject"
        placeholder="Your subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <h3>Your email:</h3>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <h3>Message:</h3>
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
