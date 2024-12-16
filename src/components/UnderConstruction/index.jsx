import React from "react";
import styles from "./underConstruction.module.css";
import illustration from "../../images/undraw_under_construction.svg";
import linkedin from "../../images/icons8-linkedin.svg";
import github from "../../images/icons8-github.svg";
import email from "../../images/mail_FILL0_wght400_GRAD0_opsz48.svg";

const UnderConstruction = () => {
  const contactLinks = [
    {
      href: "mailto:jessicamariafreund@gmail.com",
      imageSrc: email,
      altText: "Email icon to contact Jessica Maria Freund",
      ariaLabel: "Send an email to Jessica Maria Freund",
    },
    {
      href: "https://www.linkedin.com/in/jessica-maria-freund",
      imageSrc: linkedin,
      altText: "LinkedIn icon linking to Jessica Maria Freund's profile",
      ariaLabel: "Visit Jessica Maria Freund's LinkedIn profile",
    },
    {
      href: "https://github.com/JFREUN",
      imageSrc: github,
      altText: "GitHub icon linking to Jessica Maria Freund's GitHub profile",
      ariaLabel: "Visit Jessica Maria Freund's GitHub profile",
    },
  ];
  return (
    <div className={styles.mainDiv}>
      <img src={illustration} alt="" />
      <div>
        <h1 className={styles.header1}>Under construction</h1>
        <p>Hi there! My portfolio is currently undergoing a makeover.</p>
        <p>Please check back soon!</p>
        <div className={styles.contactWrapper}>
          <p>Get in touch: </p>
          <div className={styles.contactLinks}>
            {contactLinks.map(
              ({ href, imageSrc, altText, ariaLabel }, index) => (
                <a
                  href={href}
                  className="linkWrapper btn"
                  key={index}
                  aria-label={ariaLabel}
                >
                  <img
                    className={styles.contactLink}
                    src={imageSrc}
                    alt={altText}
                  />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
