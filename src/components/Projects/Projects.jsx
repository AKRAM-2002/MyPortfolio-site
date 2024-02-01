import React from 'react';
import ProjectItem from './ProjectItem'; 
import styles from './Projects.module.css';



//assets
import DWG from '../../images/dwglandP.png'
import Codeysite from '../../images/codeysite.png'


const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectContent}>
        <div className={styles.title}>
          <h2 className={styles.animatedHeading}>Selected <span>Works</span></h2><hr />
        </div>
          <h3>Explore My Portfolio Projects 🚀</h3>
           <div className={styles.container}>
            <ul className={styles.cardsP}>
              <ProjectItem className={styles.card}
                title="Codey Site"
                date="(2023)"
                description=""
                stack={['React',' Js', ' Css']}
                codeLink="https://github.com/Codey-ma/frontend"
                liveDemoLink=""
                imageSrc={Codeysite}
                altText="Codey Website"
              />
              <ProjectItem className={styles.card}
                title="DWG Landing Page"
                date="(2023)"
                description=""
                stack={['React ','TailwindCss']}
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
                codeLink="https://github.com/AKRAM-2002/Gym-DashBoard"
                liveDemoLink="https://gym-dash-board.vercel.app/"
                imageSrc=""
                altText="Gym DashBoard"
              />
           </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
