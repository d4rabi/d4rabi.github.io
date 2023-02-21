import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
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

function MainContent() {
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const achievementsRef = useRef(null);
    const activitiesRef = useRef(null);
    const workRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    const handleScroll = (elRef) => {
        elRef.current.scrollIntoView({ behavior: 'smooth', block: "start" });
    }


    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1];
        if(path === ''){
            handleScroll(introRef);
        } else if(path === 'about'){
            handleScroll(aboutRef);
        } else if(path === 'education'){
            handleScroll(educationRef);
        } else if(path === 'achievement'){
            handleScroll(achievementsRef);
        } else if(path === 'activity'){
            handleScroll(activitiesRef);
        } else if(path === 'work'){
            handleScroll(workRef);
        } else if(path === 'project'){
            handleScroll(projectsRef);
        } else if(path === 'contact'){
            handleScroll(contactsRef);
        }
    }, [location]);

    return (
        <React.Fragment>
            <Header />
            <Intro ref={introRef} />
            <About ref={aboutRef} />
            <Education ref={educationRef} />
            <Achievements ref={achievementsRef} />
            <Activities ref={activitiesRef} />
            <Work ref={workRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactsRef} />
            <Footer />
        </React.Fragment>
    )
}

export default MainContent;