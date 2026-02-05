import { useEffect, useRef, useState } from "react";
import styles from "./CardsAbout.module.scss";

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  alt?: string;
};

type Props = { feature: Feature; variant?: "english" | "default" };

export default function FeatureCard({ feature, variant }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={cardRef}
      className={`${styles.card} ${
        variant === "english" ? styles.english : ""
      } ${isVisible ? styles.appear : ""}`}
    >
      <div className={styles.row}>
        <img
          src={feature.icon}
          alt={feature.alt ?? feature.title}
          style={{
            width: "40px",
            filter:
              "brightness(0) saturate(100%) invert(48%) sepia(88%) saturate(398%) hue-rotate(11deg) brightness(92%) contrast(92%)",
          }}
        />

        <div className={styles.text}>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.descr}>{feature.description}</p>
        </div>
      </div>
    </li>
  );
}
