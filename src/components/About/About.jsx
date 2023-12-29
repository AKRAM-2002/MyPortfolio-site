import React from 'react';
import styles from './About.module.css';
import random from '../../images/random.jpg';


const About = () => {
  return (
    <section id='about' className={styles.about}>
        <div className="container">
            <div className={styles.title}>
                <h2>About <span>Me</span></h2><hr />
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
                    I'm <span className={styles.name}>Akram</span>, a Junior Front-End Developer 
                    passionate about crafting user-friendly websites.
                    Proficient in HTML, CSS, JavaScript, React, Tailwind, SCSS, and more.
                    I specialize in creating seamless and engaging interfaces. 
                    I excel in writing clean, optimized code and collaborating with cross-functional teams to deliver outstanding web applications.

                    </p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About
