import { useState } from "react";
import styles from "./ContactForm.module.scss";
// remove: import emailjs from "@emailjs/browser";

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

    const payload = {
      name: form.name,
      subject: form.subject,
      email: form.email,
      message: form.message,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Server error:", data);
        alert("Something went wrong. Please check console.");
      } else {
        alert("Message sent successfully!");
        setForm({ name: "", subject: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
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
