import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollTrigger, Slide, Fab, Box } from "@mui/material";
import { motion } from "framer-motion";
import NavigationIcon from '@mui/icons-material/Navigation';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Activities from "./components/Activities/Activities";
import Work from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { prePath } from "./data/staticData";


const MainContent = forwardRef((props, ref) => {
    const [mainContentRef, setMainContentRef] = useState(undefined); 

    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const achievementsRef = useRef(null);
    const activitiesRef = useRef(null);
    const workRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();
    const scroll = useScrollTrigger({ target: mainContentRef });
    
    const handleScroll = (elRef) => {
        elRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
    }

    useEffect(() => {
        const path = location.pathname.split('/')[2];
        if (path === 'about') {
            handleScroll(aboutRef);
        } else if (path === 'education') {
            handleScroll(educationRef);
        } else if (path === 'achievement') {
            handleScroll(achievementsRef);
        } else if (path === 'activity') {
            handleScroll(activitiesRef);
        } else if (path === 'work') {
            handleScroll(workRef);
        } else if (path === 'project') {
            handleScroll(projectsRef);
        } else if (path === 'contact') {
            handleScroll(contactsRef);
        } else {
            handleScroll(introRef);
        }
    }, [location]);

    return (
        <div ref={ref}>
            <div id='main-content' ref={node => {
                if (node) {
                    setMainContentRef(node);
                }
            }}>
                <Slide appear={false} direction="down" in={!scroll}>
                    <Header/>
                </Slide>
                <Box ref={introRef}>
                    <Intro />
                </Box>
                <Box ref={aboutRef}>
                    <motion.div
                        initial={{ opacity: 0, x: '-50vw' }}
                        whileInView={{ opacity: 1 , x: '0vw', transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef, margin: '-50% 0% -50% 0%' }}
                    >
                        <About />
                    </motion.div>
                </Box>
                <Box ref={educationRef}>
                    <motion.div
                        initial={{ opacity: 0, x: '50vw' }}
                        whileInView={{ opacity: 1 , x: '0vw', transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef, margin: '-50% 0% -50% 0%' }}
                    >
                        <Education />
                    </motion.div>
                </Box>
                <Box ref={achievementsRef}>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 , transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef }}
                    >
                        <Achievements />
                    </motion.div>
                </Box>
                <Box ref={activitiesRef}>
                    <motion.div
                        initial={{ opacity: 0, x: '50vw' }}
                        whileInView={{ opacity: 1 , x: '0vw', transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef, margin: '-50% 0% -50% 0%'  }}
                    >
                        <Activities />
                    </motion.div>
                </Box>
                <Box ref={workRef}>
                    <motion.div
                        initial={{ opacity: 0, x: '-50vw' }}
                        whileInView={{ opacity: 1 , x: '0vw', transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef, margin: '-50% 0% -50% 0%'  }}
                    >
                        <Work />
                    </motion.div>
                </Box>
                <Box ref={projectsRef}>
                    <motion.div
                        initial={{ opacity: 0, x: '50vw' }}
                        whileInView={{ opacity: 1 , x: '0vw', transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef, margin: '-50% 0% -50% 0%'  }}
                    >
                        <Projects />
                    </motion.div>
                </Box>
                <Box ref={contactsRef}>
                    <motion.div
                        initial={{ scale: 0, rotate: 20 }}
                        whileInView={{ scale: 1 , rotate: 0, transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        viewport={{ root: mainContentRef }}
                    >
                        <Contact />
                    </motion.div>
                </Box>
                <Footer />
            </div>
            <Fab size="small" sx={{ position: 'fixed', bottom: '5%', right: '10%', backgroundColor: "#5ceaca" }} onClick={()=>navigate(prePath)}>
                <NavigationIcon />
            </Fab>
        </div>
    )
});

export default MainContent;