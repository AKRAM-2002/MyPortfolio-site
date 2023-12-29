import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import mylogo from '../../images/mylogo.png';
import NavbarLinks from './NavbarLinks';
import { FaTimes } from 'react-icons/fa';


const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
]

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    
   
    useEffect(()=> {
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[windowWidth])

    useEffect(() =>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    useEffect(()=>{
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        }
        const handleIntersect = entries =>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id)
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        const sections = document.querySelectorAll('section');
        sections.forEach(section =>{
            observer.observe(section)
        });

        return () => {
            sections.forEach((section) =>{
                observer.unobserve(section);
            })
        }
       

    },[]);



    const handleSectionClick = (event)=>{
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').
        substring(1);
        const section = document.getElementById(sectionId);

        if(section){
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior:'smooth'
            })
        }
    };

    

    const toggleNavbar = () => setShowNavbar(!showNavbar)


    

  return (
    <header className={styles.header}>
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles["navbar-wrapper"]}>
                    <div className={styles.logo}>
                        <a href="index.html"  >
                            <img src={mylogo} alt="logo" />
                        </a>
                        <div className={styles['logo-inner']}>
                            <span className={styles.top}>Akram Boutzouga</span><br />
                            <span className={styles.bottom}>Web Developer</span>
                        </div>
                    </div>

                    <div className={`${styles["navbar-menu"]} 
                      ${showNavbar ? styles.show: ''
                    }`}>
                        <ul>
                           {navLinks.map((link) => (
                                <NavbarLinks 
                                key={link.id}
                                href={`#${link.id}`}    
                                label={link.label}
                                onclick={handleSectionClick}
                                active={activeSection === link.id}
                                />
                            ))}
                        </ul>
                    </div>
                    
                    {windowWidth <= 890 && (
                    <div
                        className={`${styles['toggle-button']} ${showNavbar ? styles.open : ''}`}
                        onClick={toggleNavbar}
                                >
                    {!showNavbar ? (
                        <>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                        </>
                    ) : (
                        <FaTimes style={{ color: 'white', fontSize: '30px' }} />
                    )}
                </div>
)}
                    
                </div>
            </div>

        </nav>

    </header>
  )
}

export default Navbar
