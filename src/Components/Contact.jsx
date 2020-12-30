import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h3>Find me here...</h3>
        <div className="icons-container">
          <div className="icons">
            <a href="https://github.com/clsfoy">
              <i class="devicon-github-original-wordmark "></i>
            </a>
            <a href="https://www.linkedin.com/in/charliefoy/">
              <i class="devicon-linkedin-plain"></i>
            </a>
            <a href="mailto:clsfoy@gmail.com">
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
