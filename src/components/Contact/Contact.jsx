// Contact.jsx
import React, { useRef, useState } from 'react';
import { Button } from "@mui/material";
import emailjs from 'emailjs-com'; // Import emailjs
import styles from './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
  const contactRef = useRef();
  const headingRef = useRef();
  useScrollAnimation(contactRef, 'animated-heading', headingRef);

  const [letterClass, setLetterClass] = useState('text-animate');
  const titleArray = ['C', 'O', 'N', 'T', 'A', 'C', 'T', ''];

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.send('your_service_id', 'your_template_id', {
      from_name: e.target[0].value, // Assuming the first input is for the name
      from_email: e.target[1].value, // Assuming the second input is for the email
      message: e.target[2].value, // Assuming the textarea is for the message
    }).then(
      (result) => {
        console.log(result.text);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.log(error.text);
        // Handle error, e.g., show an error message
      }
    );
  };

  return (
    <section className="contact-section" ref={contactRef}>
      <div className={styles.title} ref={headingRef}>
        <h2 className='animated-heading'><AnimatedLetters letterClass={letterClass} strArray={titleArray} /><span className='me'>Me</span></h2><hr />
      </div>

      <div className="contact-container">
        <div className="left">
          <p>
            I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other requests or questions, feel free to reach out to me for any inquiries or opportunities.
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
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
            <Button type="submit" className="submit-button">Send Message</Button>
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
