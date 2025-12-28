import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import mila from "../../assets/pictures/Mila.svg";
import math from "../../assets/pictures/math.png";
import gmail from "../../assets/pictures/icons/gmail.png";
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
              learning, I’ve helped students discover their true capabilities
              and achieve meaningful academic goals. I studied at the{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                University of British Columbia{" "}
              </span>
              and am currently a master’s student in Data Science in Europe,
              combining a strong academic foundation with hands-on teaching
              experience. Through individual tutoring, online lessons, and
              university-level teaching, I’ve developed an approach that
              prioritizes understanding, practice, and adapting to each
              student’s learning style rather than relying on memorization or
              passive lecturing.
            </p>
            <p>
              With a formal background in mathematics and experience tutoring a
              wide range of subjects, I can help you achieve your learning
              goals—whether that means exam preparation, strengthening
              fundamentals, or developing practical, real-world skills. I work
              alongside my students to build personalized learning plans that
              turn complex ideas into confidence and clarity.
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
            formulas. Lessons focus on clarity and step-by-step problem solving.
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

      <div className={styles.footer}>
        <h2>Not sure if I'm for you?</h2>
        <div className={styles.desktopFooter}>
          <h3>
            I believe the best work comes from a great connection. If you're not
            sure if I'm the right tutor for you, you can send me a request so we
            can spend 15 minutes getting to know each other.
          </h3>

          <div className={styles.footerGmail}>
            <img src={gmail} alt="gmail icon" className={styles.gmailIcon} />
            <div className={styles.footerGmail2}>
              <h4>Send me an email to: </h4>
              <h4>
                <a href="mailto:mila.micovic26@gmail.com">
                  mila.micovic26@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>

        <p>© Designed and Developed by The Cave</p>
      </div>
    </div>
  );
};
