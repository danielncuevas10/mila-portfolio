import React from "react";
import styles from "./CardServices.module.scss";

export type Services = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
  alt?: string;
};

type Props = { feature: Services; variant?: "english" | "default" };

export default function ServicesCard({ feature, variant }: Props) {
  return (
    <li
      className={`${styles.card} ${
        variant === "english" ? styles.english : ""
      }`}
    >
      <div className={styles.header}>
        <img src={feature.icon} alt={feature.alt ?? feature.title} />
      </div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.descr}>{feature.description}</p>
      <ul>
        {feature.bullets?.map((bullet, idx) => (
          <li key={idx} className={styles.bullet}>
            {bullet}
          </li>
        ))}
      </ul>
    </li>
  );
}
