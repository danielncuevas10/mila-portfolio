import React from "react";
import styles from "./CardTestimonials.module.scss";

export type Testimonials = {
  id: string;
  icon: string;
  title: string;
  description: string;
  parent: string;
  alt?: string;
};

type Props = { feature: Testimonials; variant?: "english" | "default" };

export default function TestimonialsCard({ feature, variant }: Props) {
  return (
    <li
      className={`${styles.card} ${
        variant === "english" ? styles.english : ""
      }`}
    >
      <div className={styles.header}>
        <img src={feature.icon} alt={feature.alt ?? feature.title} />
      </div>

      <p className={styles.descr}>{feature.description}</p>

      <hr className={styles.lineSeparator} />

      <h3 className={styles.title}>{feature.title}</h3>
      <h4 className={styles.parent}>{feature.parent}</h4>
    </li>
  );
}
