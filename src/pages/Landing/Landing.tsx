import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import milas from "../../assets/pictures/milas.svg";
import brain from "../../assets/pictures/icons/brain.png";
import arrowDown from "../../assets/pictures/icons/prices/arrow-down.svg";
import styles from "./Landing.module.scss";
import Button from "../../components/Button/Button";
import ServicesCard from "../../components/Card/CardServices";
import FeatureCard from "../../components/Card/CardsAbout";
import TestimonialsCard from "../../components/Card/CardTestimonials";
import PricesCard from "../../components/Card/Prices";
import { features } from "../../data/features.data.ts";
import { services } from "../../data/services.data.ts";
import { testimonials } from "../../data/testimonials.data.ts";
import { prices } from "../../data/prices.data.ts";

export const Landing = () => {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const goToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.landing}>
      <Navbar variant="default" />

      <div id="hero">
        <div className={styles.hero}>
          <div className={styles.heroTitles}>
            <h1 className={styles.mainTitle}>
              Master Mathematics with Personalized Tutoring.
            </h1>
            <h2 className={styles.subTitle}>
              Exploring the Beauty of Mathematics
            </h2>
            <p>
              Tailored 1-on-1 online tutoring designed to bridge learning gaps
              and build lasting confidence. From Algebra to Calculus, we make
              complex concepts simple.
            </p>

            <Button className={styles.desktopButton} onClick={goToContact}>
              Let’s Chat
            </Button>
          </div>

          <div className={styles.mainPicture}>
            <img src={milas} alt="Grogu" className={styles.groguImage} />
          </div>

          <Button className={styles.phoneButton} onClick={goToContact}>
            Let’s Chat
          </Button>
        </div>
      </div>

      <div className={styles.aboutMe}>
        <div className={styles.left}>
          <div className={styles.thisIsMe}>
            <h2>About Me</h2>
            <h3>Dedicated to Your Academic Success</h3>
            <p>
              Mathematics graduate from the{" "}
              <span style={{ color: "#B8860B", fontWeight: "light" }}>
                {" "}
                University of British Columbia
              </span>
              &nbsp; with 6+ years of teaching experience. Currently a Master’s
              student, I specialize in turning complex concepts into clear,
              actionable intuition. My approach replaces rote memorization with
              deep understanding, tailored to your specific goals—from exam prep
              to core fundamentals.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.featuresList}>
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      <div id="services">
        <div className={styles.services}>
          <h2>Services</h2>
          <p>Lessons focus on clarity and step-by-step problem solving.</p>

          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <ServicesCard key={service.id} feature={service} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div id="testimonials">
        <div className={styles.testimonials}>
          <h2>Testimonials</h2>
          <p>Real feedback from students who've enhanced their learning</p>

          <div className={styles.testimonialsList}>
            {testimonials.map((testimonial) => (
              <TestimonialsCard key={testimonial.id} feature={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <div id="prices">
        <div className={styles.prices}>
          <h2>Prices</h2>
          <p>Investment in academic excellence. All rates are quoted in CAD.</p>

          <div className={styles.priceDesktop}>
            {prices.map((price, index) => (
              <PricesCard key={price.id} price={price} index={index} />
            ))}
          </div>

          <div className={styles.phones}>
            {prices.map((priceItem) => (
              <div key={priceItem.id} className={styles.priceSection}>
                <button
                  className={styles.pricesClosed}
                  onClick={() => toggleSection(priceItem.id)}
                  aria-expanded={openSection === priceItem.id}
                  aria-controls={`price-list-mobile-${priceItem.id}`}
                >
                  <h3>{priceItem.title}</h3>
                  <img
                    src={arrowDown}
                    alt={openSection === priceItem.id ? "collapse" : "expand"}
                    className={`${styles.arrowDown} ${
                      openSection === priceItem.id ? styles.open : ""
                    }`}
                  />
                </button>

                <ul
                  id={`price-list-mobile-${priceItem.id}`}
                  className={`${styles.priceListMobile} ${
                    openSection === priceItem.id ? styles.open : ""
                  }`}
                  style={{
                    maxHeight: openSection === priceItem.id ? "400px" : "0",
                  }}
                  aria-hidden={openSection !== priceItem.id}
                >
                  <PricesCard key={priceItem.id} price={priceItem} />
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact">
        <div className={styles.contactMe}>
          <div className={styles.contactMeText}>
            <h1>Begin Your Journey</h1>
            <p>
              I invite parents and students to reach out for a private
              discussion regarding academic goals.
            </p>

            <img src={brain} alt="book icon" className={styles.bookIcon} />

            <div className={styles.theLine}>
              <a
                href="mailto:mila.micovic26@gmail.com"
                className={styles.footerGmailRow}
              >
                <span>mila.micovic26@gmail.com</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2>Complimentary Consultation</h2>
        <div className={styles.desktopFooter}>
          <h3>
            I invite you to send me a request so we can spend 15 minutes getting
            to know each other.
          </h3>
        </div>

        <p>© Designed and Developed by The Cave</p>
      </div>
    </div>
  );
};
