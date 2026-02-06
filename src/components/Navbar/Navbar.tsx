import { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
  variant?: "default" | "blue";
}

export const Navbar = ({ variant = "default" }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const isLandingEnglish = location.pathname.toLowerCase().includes("english");
  const appliedVariant = isLandingEnglish ? "blue" : variant;

  return (
    <nav className={`${styles.navbar} ${styles[appliedVariant]}`}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Link to="/">Mila Micovic</Link>
        </div>

        <button
          className={`${styles.hamburger} ${open ? styles.openBtn : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          type="button"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
        <li>
          <Link
            to={
              location.pathname.toLowerCase().includes("english")
                ? "/English#hero"
                : "/"
            }
            onClick={(e) => {
              setOpen(false);
              const heroId = "hero";

              if (!location.pathname.toLowerCase().includes("english")) {
                e.preventDefault();
                const hero = document.getElementById(heroId);
                if (hero) hero.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              setOpen(false);
              const id = "services";
              if (location.pathname.toLowerCase().includes("english")) {
                // redirect to English page with hash
                window.location.href = `/English#${id}`;
              } else {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={(e) => {
              setOpen(false);
              const id = "testimonials";
              if (location.pathname.toLowerCase().includes("english")) {
                window.location.href = `/English#${id}`;
              } else {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#prices"
            onClick={(e) => {
              setOpen(false);
              const id = "prices";
              if (location.pathname.toLowerCase().includes("english")) {
                window.location.href = `/English#${id}`;
              } else {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Prices
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              setOpen(false);
              const id = "contact";
              if (location.pathname.toLowerCase().includes("english")) {
                window.location.href = `/English#${id}`;
              } else {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <Link to="/English" className={styles.dividerLink}>
            Learn English
          </Link>
        </li>
      </ul>
    </nav>
  );
};
