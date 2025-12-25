import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import milaB from "../../assets/pictures/MilaB.svg";
import math from "../../assets/pictures/math.png";
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
import ContactForm from "../../components/ContactForm/ContactForm";

export const English = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    // try immediately, otherwise try once after a tiny delay (element might render slightly later)
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
            <h1 className={styles.mainTitle}>English Teacher</h1>
            <h2 className={styles.subTitle}>
              Exploring the Power or Learning a New Language
            </h2>
            <p>
              Personalized online tutoring that adapts to your learning style.
              Get one-on-one attention, flexible scheduling, and proven results
              that help you achieve your bilingual goals.
            </p>
            <Button className={styles.desktopButton} onClick={goToContact}>
              Contact me
            </Button>
          </div>

          <div className={styles.mainPicture}>
            <img src={milaB} alt="Grogu" className={styles.groguImage} />
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
              With over 5 years of experience teaching English to students
              around the world, I’ve helped learners from Asia, Latin America,
              and Europe gain confidence and fluency in real-world
              communication. Through individual tutoring, online lessons, and
              university-level teaching, I’ve developed an approach that starts
              with understanding each student’s background, goals, and learning
              style.
            </p>
            <p>
              My lessons focus on clarity, practice, and meaningful use of
              English rather than rote memorization or passive lectures.
            </p>
            <p>
              My academic background and broad tutoring experience allow me to
              support a wide range of learning goals—whether you’re preparing
              for an exam, improving professional English, or building everyday
              communication skills. I work alongside my students to create
              personalized lesson plans that respect cultural differences and
              help reveal their full learning potential.
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

      <div className={`${styles.mathMain} ${styles.english}`}>
        <img src={math} alt="Grogu" className={styles.mathImage} />
      </div>

      <div id="services">
        <div className={`${styles.services} ${styles.english}`}>
          <h2>Services</h2>
          <p>
            I help students use English with confidence in real situations.
            Lessons are practical, interactive, and designed to improve
            speaking, understanding, and communication from the very first
            class.
          </p>

          <div className={styles.servicesList}>
            {servicesEnglish.map((service) => (
              <ServicesCard
                key={service.id}
                feature={service}
                variant="english"
              />
            ))}
          </div>
        </div>
      </div>

      <div id="testimonials">
        <div className={`${styles.testimonials} ${styles.english}`}>
          <h2>Testimonials</h2>
          <p>
            Real feedback from students who've transformed their learning
            experience
          </p>
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
          <h4>All the prices are shown in Canadian Dollars.</h4>

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
            <h1>Contact me</h1>
            <p>
              I'm always interested in discussing new research ideas, potential
              collaborations, and opportunities to mentor graduate students in
              mathematics.
            </p>

            <div className={`${styles.form} ${styles.english}`}>
              <ContactForm variant="english" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
