import React, { useRef, useState } from 'react';
import styles from './About.module.css';
import random from '../../images/random.jpg';
import AnimatedLetters from '../../components/AnimatedLetters'
import useScrollAnimation from '../hooks/useScrollAnimation';


const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const titleArray = ['A','B','O','U','T']

    const aboutRef = useRef();
    const headingRef = useRef();
    useScrollAnimation(aboutRef, 'animated-heading', headingRef);
    


  return (
    <section id='about' className={styles.about} ref={aboutRef}>
        <div className="container">
            <div className={styles.title} ref={headingRef}>
                <h2 className='animated-heading'><AnimatedLetters letterClass={letterClass} strArray={titleArray} /> <span className={styles.me}>Me</span></h2><hr />
            </div>
            <div className="grid">
                <div className={styles['about-img']}>
                    <img src={random} alt="Akram" />
                    <span>
                    {/** Add animation later */}
                    </span>
                </div>
                <div className={styles['about-content']}>
                    <h3>Hi There!</h3>
                    <p>
                    I'm <span className={styles.name}>Akram</span>, a Full Stack Developer passionate about building robust and scalable web applications. With expertise in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more, I enjoy working on both the front-end and back-end to create seamless and efficient solutions. My skills extend to technologies like Tailwind CSS, SCSS, and I thrive on writing clean, optimized code. I'm dedicated to crafting user-friendly websites and collaborating with cross-functional teams to deliver outstanding web applications.

                    </p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About
