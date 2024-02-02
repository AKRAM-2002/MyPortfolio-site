// Hobbies.jsx
import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Hobbies.css';

const Hobbies = () => {
  const hobbiesRef = useRef();
  const headingRef = useRef();
  useScrollAnimation(hobbiesRef, 'animated-heading', headingRef);

  return (
    <section className="hobbies-section" ref={hobbiesRef}>
      <h2 className="hobbies-heading" ref={headingRef}>
        Hobbies & Passions
      </h2>
      <hr />
      <p className="hobbies-text animated-text">
        Beyond my professional pursuits, I'm an avid reader, a Calisthenics Athlete, and a passionate traveler. These pursuits extend beyond personal enjoyment; they infuse me with diverse perspectives, fuel my creativity, and hone my problem-solving skills, forging a well-rounded individual capable of tackling challenges with versatility.
      </p>
    </section>
  );
};

export default Hobbies;
