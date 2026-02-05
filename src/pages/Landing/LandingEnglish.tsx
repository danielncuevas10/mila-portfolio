import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import mila from "../../assets/pictures/Mila.svg";
import book from "../../assets/pictures/icons/book.png";
import arrowDown from "../../assets/pictures/icons/prices/arrow-down.svg";
import styles from "./Landing.module.scss";
import Button from "../../components/Button/Button";
import ServicesCard from "../../components/Card/CardServices";
import FeatureCard from "../../components/Card/CardsAbout";
import TestimonialsCard from "../../components/Card/CardTestimonials";
import PricesCard from "../../components/Card/Prices";
import { featureEnglish } from "../../data/features.data";
import { servicesEnglish } from "../../data/services.data";
import { testimonialsEnglish } from "../../data/testimonials.data";
import { pricesEnglish } from "../../data/prices.data";

export const English = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const t = setTimeout(() => {
      const e2 = document.getElementById(id);
      if (e2) e2.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(t);
  }, [location]);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const goToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.landing} ${styles.english}`}>
      <Navbar variant="blue" />
      <div id="hero">
        <div className={styles.hero}>
          <div className={styles.heroTitles}>
            <h1 className={styles.mainTitle}>Mastering Expression.</h1>
            <h2 className={styles.subTitle}>PREMIUM ENGLISH TUTORING</h2>

            <p>
              Personalized mentorship designed for students who demand
              excellence in English. From academic writing to fluent
              conversation, we build the foundations of a global communicator.
            </p>
            <Button className={styles.desktopButton} onClick={goToContact}>
              Contact me
            </Button>
          </div>

          <div className={styles.mainPicture}>
            <img src={mila} alt="Grogu" className={styles.groguImage} />
          </div>

          <Button className={styles.phoneButton} onClick={goToContact}>
            Contact me
          </Button>
        </div>
      </div>

      <div className={`${styles.aboutMe} ${styles.english}`}>
        <div className={styles.left}>
          <div className={styles.thisIsMe}>
            <h2>About Me</h2>
            <h3>Dedicated to Your Academic Success</h3>
            <p>
              With over five years of international experience, I provide more
              than just English lessons—I offer a gateway to global
              communication. Having mentored learners across Europe, Asia, and
              Latin America, I specialize in transforming complex language into
              a natural, intuitive skill.
            </p>
            <p>
              My approach moves beyond rote memorization, focusing on the
              cultural nuances and strategic communication required for success
              in university settings and standardized exams like
              <span style={{ fontWeight: "bold" }}>TOEFL</span> and{" "}
              <span style={{ fontWeight: "bold" }}>IELTS</span>.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.featuresList}>
            {featureEnglish.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                variant="english"
              />
            ))}
          </div>
        </div>
      </div>

      <div id="services">
        <div className={`${styles.services} ${styles.english}`}>
          <h2>Educational Pillars</h2>
          <p>Refined English mentorship designed for the global stage.</p>

          <div className={styles.servicesList}>
            {servicesEnglish.map((service, index) => (
              <ServicesCard
                key={service.id}
                feature={service}
                variant="english"
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="testimonials">
        <div className={`${styles.testimonials} ${styles.english}`}>
          <h2>Testimonials</h2>
          <p>Real feedback from students who've enhanced their learning</p>
          <div className={styles.testimonialsList}>
            {testimonialsEnglish.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.id}
                feature={testimonial}
                variant="english"
              />
            ))}
          </div>
        </div>
      </div>

      <div id="prices">
        <div className={`${styles.prices} ${styles.english}`}>
          <h2>Prices</h2>
          <p>Investment in academic excellence. All rates are quoted in CAD.</p>

          <div className={`${styles.priceDesktop} ${styles.english}`}>
            {pricesEnglish.map((price) => (
              <PricesCard
                key={price.id}
                price={price}
                variant="english"
                isOpen={false}
              />
            ))}
          </div>

          <div className={`${styles.phones} ${styles.english}`}>
            {pricesEnglish.map((priceItem) => (
              <div key={priceItem.id} className={styles.priceSection}>
                <button
                  className={`${styles.pricesClosed} ${styles.english}`}
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
                  <PricesCard
                    key={priceItem.id}
                    price={priceItem}
                    variant="english"
                    isOpen={openSection === priceItem.id}
                  />
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact">
        <div className={`${styles.contactMe} ${styles.english}`}>
          <div className={styles.contactMeText}>
            <h1>Begin Your Journey</h1>
            <p>
              I invite parents and students to reach out for a private
              discussion regarding academic goals.
            </p>

            <img src={book} alt="book icon" className={styles.bookIcon} />

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

      <div className={`${styles.footer} ${styles.english}`}>
        <h2>Complementary Consultation</h2>
        <div className={styles.desktopFooter}>
          <h3>
            Let’s connect to talk about your goals and create a plan that works
            for you.
          </h3>
        </div>

        <p>© Designed and Developed by The Cave</p>
      </div>
    </div>
  );
};
