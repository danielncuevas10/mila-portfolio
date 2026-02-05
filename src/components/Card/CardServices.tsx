import { useEffect, useRef, useState } from "react";
import styles from "./CardServices.module.scss";

export type Services = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
  alt?: string;
};

type Props = {
  feature: Services;
  variant?: "english" | "default";
  index: number;
};

export default function ServicesCard({ feature, variant, index }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.appear : ""} ${
        variant === "english" ? styles.english : ""
      }`}
      style={{ transitionDelay: `${index * 0.15}s` } as React.CSSProperties}
    >
      <div className={styles.header}>
        <img
          src={feature.icon}
          alt={feature.alt ?? feature.title}
          className={styles.icon}
        />
      </div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.descr}>{feature.description}</p>
      <ul className={styles.bulletList}>
        {feature.bullets?.map((bullet, idx) => (
          <li key={idx} className={styles.bullet}>
            {bullet}
          </li>
        ))}
      </ul>
    </li>
  );
}
