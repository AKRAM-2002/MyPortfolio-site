import React, { useRef, useState } from 'react';
import ProjectItem from './ProjectItem'; 
import styles from './Projects.module.css';
//assets
import DWG from '../../images/dwglandP.png';
import Codeysite from '../../images/codeysite.png';
import GymDashboardImage from '../../images/codeysite.png';
import AnimatedLetters from '../../components/AnimatedLetters';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {

  

  const devProjects = [
    {
      title: 'Codey Site',
      date: '(2023)',
      description: '',
      stack: ['React', 'Js', 'Css'],
      codeLink: 'https://github.com/Codey-ma/frontend',
      liveDemoLink: '',
      imageSrc: Codeysite,
      altText: 'Codey Website'

    },
    {
      title: 'DWG Landing Page',
      date: '(2023)',
      description: '',
      stack: ['React', 'TailwindCss'],
      codeLink: '',
      liveDemoLink: 'https://akram-2002.github.io/DWG-landing-page/',
      imageSrc: DWG,
      altText: 'DWG Landing Page'

    },
    { 
      title: 'Gym Dashboard',
      date: '(2023)',
      description: '',
      stack: ['React'],
      codeLink: 'https://github.com/AKRAM-2002/Gym-DashBoard',
      liveDemoLink: 'https://gym-dash-board.vercel.app/',
      imageSrc: GymDashboardImage,
      altText: 'Gym Dashboard'
    },
  ];

  const getFilteredProjects = () => {
    if (selectedCategory === 'Dev Projects') {
      return devProjects;
    } else if (selectedCategory === 'Entrepreneurship') {
      return entrepreneurshipProjects;
    } 
    else if( selectedCategory === 'Fitness Projects'){
      return fitnessProjects;
    }
    else {
      // 'All' category, show all projects
      return [...devProjects, ...entrepreneurshipProjects, ...fitnessProjects];
      
    }
  };

  const entrepreneurshipProjects = [];
  const fitnessProjects = [];

  // Project categories
  const projectCategories = ['All', 'Dev Projects', 'Entrepreneurship', 'Fitness Projects'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  //Handle categories selected
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  

  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['S','E','L','E','C','T','E','D','']

  const projectRef = useRef()
  const headingRef = useRef()
  useScrollAnimation(projectRef, 'animated-heading', headingRef)

  return (
    <section id="projects" className={styles.projects} ref={projectRef}>
      <div className={styles.container}>
        <div className={styles.projectContent}>
        <div className={styles.title} ref={headingRef}>
          <h2 className='animated-heading'><AnimatedLetters letterClass={letterClass} strArray={titleArray} /><span className={styles.me}>Works</span></h2><hr />
        </div>
          {/* <h3>Explore My Portfolio Projects 🚀</h3> */}
          <div className={styles.projectCategories}>
          <ul>
          {projectCategories.map((category) => (
            
            <li
              key={category}
              className={category === selectedCategory ? 'active': ''}
              onClick={() => handleCategorySelect(category)}
              
            >
              {category}
            </li>
            
            ))}
            </ul>
          </div>
           <div className={styles.container}>
            <ul className={styles.cardsP}>
              { getFilteredProjects().length > 0 ? (
                getFilteredProjects().map((project) => (
                <ProjectItem
                  key={project.title}
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  stack={project.stack}
                  codeLink={project.codeLink}
                  liveDemoLink={project.liveDemoLink}
                  imageSrc={project.imageSrc}
                  altText={project.altText}
                />
              
              ))
              ) : (
                <div className={styles.noProjectsMessage}>
                  <h3>No Projects Found</h3>
                </div>
              )}

            </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
