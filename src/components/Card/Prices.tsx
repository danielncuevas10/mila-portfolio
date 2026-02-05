import styles from "./Prices.module.scss";
import { useEffect, useRef, useState } from "react";

export type Prices = {
  id: string;
  icon: string;
  thePrice: string;
  title: string;
  description: string;
  alt?: string;
  isPopular?: boolean;
};

type Props = {
  price: Prices;
  variant?: "english" | "default";
  isOpen?: boolean;
  index?: number;
};

export default function PricesCard({ price, variant, index }: Props) {
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
        price.isPopular ? styles.popular : ""
      } ${variant === "english" ? styles.english : ""}`}
      style={
        index !== undefined
          ? ({ transitionDelay: `${index * 0.15}s` } as React.CSSProperties)
          : undefined
      }
    >
      {price.isPopular && (
        <span className={styles.popularBadge}>Most popular</span>
      )}

      <div className={styles.header}>
        <h3 className={styles.title}>{price.title}</h3>
        <img src={price.icon} alt={price.alt ?? price.title} />
      </div>

      <h3 className={styles.price}>{price.thePrice}</h3>
      <p className={styles.descr}>{price.description}</p>

      <div style={{ flexGrow: 1 }}></div>

      <button
        className={styles.ctaButton}
        onClick={() =>
          (window.location.href = "mailto:mila.micovic26@gmail.com")
        }
      >
        Book a free 20-min trial
      </button>
    </li>
  );
}
