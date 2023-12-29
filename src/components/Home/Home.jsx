import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import profile from '../../images/profile.jpeg';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';



const Home = () => {
    const items = ["Developer", "Freelancer"]
    const [currentIndex, setCurrentIndex] = useState(0)
    

    useEffect(() =>{
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, 3000) // 3%3=0
        return () =>  clearInterval(interval)
    },[]);
    
  return (
    <section id="home">
        <div className="container">
            <div className={styles.home}>
                <div className={styles['home-content']}>
                    <div className={styles["home-title"]}>
                        <h2>Welcome, I'm</h2>
                        <h1>Akram</h1>
                    </div>
                    <div className={styles["text-wrapper"]}>
                        <p>
                            Creative{" "}
                            <span className={styles.items}>{items[currentIndex]}</span>
                        </p>
                    </div>
                    <div className={styles.links}>
                    <div className={styles.link}>
                        <a href="#projects" >View Projects</a>
                    </div>
                    
                    <span className={styles.divider}>or</span>
                    <div className={styles.link}>
                        <a href="#about">Read About Me</a>
                    </div>
                   
                </div> 
                 {/* Add the GitHub and LinkedIn icons here */}
                 
                <div className={styles.icons}>
                 <div className={styles.iconLink}>
                        <a href="https://github.com/AKRAM-2002" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </div>
                    <div className={styles.iconLink}>
                        <a href="https://www.linkedin.com/in/akram-boutzouga-ba3949211/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                 </div>

                 <div className={styles.iconLink}>
                    <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf />
                    <span className={styles.iconLabel}>Resume</span>
                    </a>
                </div>

                </div>
                {/* Skills section with React Icons */}
                <div className={styles.skills}>
                    <p>Tech Stack</p>
                    <div className={styles.logos}>
                        <ul>
                        <li><img src="https://skillicons.dev/icons?i=html,css" alt="" /></li>
                        <li><img src="https://skillicons.dev/icons?i=js,react" alt="" /></li>
                        <li><img src="https://skillicons.dev/icons?i=tailwind,scss" alt="" /></li>
                        </ul>
                    </div>
                    </div>
               </div>
            <div className={styles.circle}>                                           
                <div className={styles.content}>
                    <img src={profile} alt="Akram Boutzouga" />
                    <h2>
                        Akram Boutzouga
                        <br /> <span/> Web Developer
                    </h2>
                    <a href="#contact">Hire Me</a>                                                                                                                       
                </div>
            </div>

           

            
        </div>

         
        </div>             
    </section>
  )
}

export default Home
