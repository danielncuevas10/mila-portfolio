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
  return (
    <li
      className={`${styles.card} ${
        variant === "english" ? styles.english : ""
      }`}
    >
      <div className={styles.row}>
        <img src={feature.icon} alt={feature.alt ?? feature.title} />

        <div className={styles.text}>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.descr}>{feature.description}</p>
        </div>
      </div>
    </li>
  );
}
