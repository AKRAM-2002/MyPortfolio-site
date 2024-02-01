// Contact.jsx
import React from 'react';
import { Button } from "@mui/material";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="left">
          <p>
            I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other requests or questions, feel free to reach out to me for any inquiries or opportunities.
          </p>
          <form className="contact-form">
            <div className="input-grid">
              <input
                className="input-field"
                placeholder="Your Name"
                required
                type="text"
              />
              <input
                className="input-field"
                placeholder="Your Email"
                required
                type="email"
              />
            </div>
            <textarea
              className="input-field message-area"
              placeholder="Your Message"
              required
              rows="4"
            />
            <Button className="submit-button">Send Message</Button>
          </form>
        </div>
        <div className="right">
          {/* Add Cubespinner */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
