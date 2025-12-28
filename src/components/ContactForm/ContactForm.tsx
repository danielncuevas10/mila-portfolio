import { useState } from "react";
import styles from "./ContactForm.module.scss";

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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      alert("Message sent successfully!");
      setForm({ name: "", subject: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
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
      <input name="name" value={form.name} onChange={handleChange} required />

      <h3>Subject:</h3>
      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <h3>Your email:</h3>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <h3>Message:</h3>
      <textarea
        name="message"
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
