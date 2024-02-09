// Contact.jsx
import React, { useRef, useState } from 'react';
import { Button } from "@mui/material";
import emailjs from 'emailjs-com'; // Import emailjs
import styles from './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const contactRef = useRef();
  const headingRef = useRef();
  useScrollAnimation(contactRef, 'animated-heading', headingRef);
                                                         
  const [letterClass, setLetterClass] = useState('text-animate');
  const titleArray = ['C', 'O', 'N', 'T', 'A', 'C', 'T', ''];

  const refForm = useRef();
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_h5po8ur',
        'template_dzvjrf7',
        refForm.current,
        'CWJ5AxC4gUFH2Upt2'
      )
      .then(
        (result) => {
          console.log(result)
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 2000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage('Something went wrong, please try again later:');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 2000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

  
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Set initial coordinates


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
          <form ref={refForm} className="contact-form" onSubmit={sendEmail}>
            <div className="input-grid">
              <input
                className="input-field"
                placeholder="Your Name"
                required
                type="text"
                name="user_name" 
              />
              <input
                className="input-field"
                placeholder="Your Email"
                required
                type="email"
                name="user_email"
              />
            </div>
            <textarea
              className="input-field message-area"
              placeholder="Your Message"
              required
              rows="4"
              name="message"
            />
            <Button type="submit" className="submit-button" value="Send" disabled={isSubmitting}>Send Message</Button>
            {stateMessage && <p className="message">{stateMessage}</p>}
          </form>
        </div>
        <div className="right">

      
        <MapContainer center={location} zoom={13} style={{ height: "300px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
              <Popup>Your Location</Popup>
            </Marker>
        </MapContainer>


        </div>
      </div>
    </section>
  );
};

export default Contact;
