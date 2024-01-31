import React from 'react';
import { Button } from "@mui/material";
import './Contact.css'
// import '../../index.css'
const Contact = () => {
  return (
    <>
    <section className="contact-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input
            className="name-input"
            placeholder="Your Name"
            required
            type="text"
          />
          <input
            className="email-input"
            placeholder="Your Email"
            required
            type="email"
          />
          <textarea
            className="message-area"
            placeholder="Your Message"
            required
            rows="4"
          />
          <Button  className=''>Send Message</Button>
        </form>
      </section>
    </>
  )
}

export default Contact