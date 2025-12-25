import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import mila from "../../assets/pictures/mila.svg";
import math from "../../assets/pictures/math.png";
import arrowDown from "../../assets/pictures/icons/prices/arrow-down.svg";
import styles from "./Landing.module.scss";
import Button from "../../components/Button/Button";
import ServicesCard from "../../components/Card/CardServices";
import FeatureCard from "../../components/Card/CardsAbout";
import TestimonialsCard from "../../components/Card/CardTestimonials";
import PricesCard from "../../components/Card/Prices";
import ContactForm from "../../components/ContactForm/ContactForm";
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
            <h1 className={styles.mainTitle}>Math Teacher</h1>
            <h2 className={styles.subTitle}>
              Exploring the Beauty of Mathematics
            </h2>
            <p>
              Personalized online tutoring that adapts to your learning style.
              Get one-on-one attention, flexible scheduling, and proven results
              that help you achieve your academic goals.
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

      <div className={styles.aboutMe}>
        <div className={styles.left}>
          <div className={styles.thisIsMe}>
            <h2>About Me</h2>
            <h3>Dedicated to Your Academic Success</h3>
            <p>
              With over 6 years of teaching experience and a passion for
              learning, I’ve helped so many students discover their true
              capabilities and achieve their academic goals. With experience in
              individual tutoring, online lessons, and teaching in a university
              classroom setting, I have developed an approach that prioritizes
              getting to know my students learning styles and focusing on
              understanding and practice rather than lecturing and memorization.
            </p>
            <p>
              With a formal background in mathematics, and tutoring experience
              in a wide range of subjects, I can help you achieve your learning
              goals - whether that’s preparing for an exam, or gaining more
              knowledge and skills in a subject. I am here to work along side
              you and build personalized plans and lessons to reveal your true
              learning abilities!
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

      <div className={styles.mathMain}>
        <img src={math} alt="Grogu" className={styles.mathImage} />
      </div>

      <div id="services">
        <div className={styles.services}>
          <h2>Services</h2>
          <p>
            I help students truly understand mathematics instead of memorizing
            formulas. Lessons focus on clarity, logical thinking, and
            step-by-step problem solving, so you gain skills that carry over
            into exams.
          </p>

          <div className={styles.servicesList}>
            {services.map((service) => (
              <ServicesCard key={service.id} feature={service} />
            ))}
          </div>
        </div>
      </div>

      <div id="testimonials">
        <div className={styles.testimonials}>
          <h2>Testimonials</h2>
          <h3>Real feedback from students who've enhanced their learning</h3>

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
          <h4>All the prices are shown in Canadian Dollars.</h4>

          <div className={styles.priceDesktop}>
            {prices.map((price) => (
              <PricesCard key={price.id} price={price} />
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
            <h1>Contact Me</h1>
            <p>
              I'm always interested in discussing new research ideas, potential
              collaborations, and opportunities to mentor graduate students in
              mathematics.
            </p>

            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
