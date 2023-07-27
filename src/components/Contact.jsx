import React from "react";
import linkedin from "../images/icons8-linkedin.svg";
import github from "../images/icons8-github.svg";
import phone from "../images/call_FILL0_wght400_GRAD0_opsz48.svg";
import email from "../images/mail_FILL0_wght400_GRAD0_opsz48.svg";
import contact from "../images/undraw_message_sent_re_q2kl.svg";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact" id="contact">
      <div className="contactTitle">
        <div className="contactDetails">
          <p>CONTACT</p>
          <h3>Looking for a new developer?</h3>
          <div className="contactDiv">
            <img className="contactIcon" src={email} alt="email" />
            <p>jessicamariafreund@gmail.com</p>
          </div>
          <div className="contactDiv">
            <img className="contactIcon" src={phone} alt="" />
            <p>+49 159 068 123 14</p>
          </div>

          <div className="contactLinks">
            <a
              href="https://www.linkedin.com/in/jessica-maria-freund"
              className="linkWrapper btn"
            >
              {" "}
              <img className="contactLink" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/JFREUN" className="linkWrapper btn">
              {" "}
              <img className="contactLink" src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="contactImg">
          <img src={contact} alt="message-sent" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
