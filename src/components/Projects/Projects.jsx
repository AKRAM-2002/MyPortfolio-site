import React from 'react';
import ProjectItem from './ProjectItem'; 
import styles from './Projects.module.css';
import cardData from './cardData';


//assets
import DWG from '../../images/dwglandP.png'
import Codeysite from '../../images/codeysite.png'


const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectContent}>
        <div className={styles.title}>
          <h2>Selected <span>Works</span></h2><hr />
        </div>
          <h3>Explore My Portfolio Projects 🚀</h3>
           <ul className={styles.cards}>
            <ProjectItem className={styles.card}
              title="Codey Site"
              date="(2023)"
              description=""
              stack={['React']}
              codeLink=""
              liveDemoLink=""
              imageSrc={Codeysite}
              altText="Codey Website"
            />
            <ProjectItem className={styles.card}
              title="DWG Landing Page"
              date="(2023)"
              description=""
              stack={['React']}
              codeLink=""
              liveDemoLink="https://akram-2002.github.io/DWG-landing-page/"
              imageSrc={DWG}
              altText="DWG Landing Page"
            />
            <ProjectItem className={styles.card}
              title="Gym DashBoard"
              date="(2023)"
              description=""
              stack={['React']}
              codeLink=""
              liveDemoLink=""
              imageSrc=""
              altText="Gym DashBoard"
            />
           </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
