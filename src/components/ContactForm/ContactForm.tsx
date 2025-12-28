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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Send failed");

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
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
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
