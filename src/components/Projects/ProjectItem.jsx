// In ProjectItem.jsx

import React from 'react';
import styles from './Projects.module.css';

const ProjectItem = ({
  title,
  date,
  description,
  stack,
  codeLink,
  liveDemoLink,
  imageSrc,
  altText,
}) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={imageSrc} alt={altText} className={styles.cardImage} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
        <p>{stack}</p>
        <a href={codeLink} className={styles.link} target='_blank'>
          Code
        </a>
        <a href={liveDemoLink} className={styles.link} target='_blank'>
          LiveDemo
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
