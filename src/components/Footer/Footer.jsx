import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons from react-icons
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className={styles.socialLinks}>
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/akram-boutzouga-ba3949211/"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AKRAM-2002"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
