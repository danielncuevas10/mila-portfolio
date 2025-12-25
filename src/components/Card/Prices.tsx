import React from "react";
import styles from "./Prices.module.scss";

export type Prices = {
  id: string;
  icon: string;
  thePrice: string;
  title: string;
  description: string;
  alt?: string;
};

type Props = {
  price: Prices;
  variant?: "english" | "default";
  isOpen?: boolean;
};

export default function PricesCard({ price, variant }: Props) {
  return (
    <li
      className={`${styles.card} ${
        variant === "english" ? styles.english : ""
      }`}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{price.title}</h3>

        <img src={price.icon} alt={price.alt ?? price.title} />
      </div>
      <h3 className={styles.price}>{price.thePrice}</h3>
      <p className={styles.descr}>{price.description}</p>
    </li>
  );
}
