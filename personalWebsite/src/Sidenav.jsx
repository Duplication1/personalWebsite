import React, { useState } from "react";
import './App.css';
import Projects from "./Projects";
import Resume from "./Resume";
import Education from "./Education";
import Courses from "./Courses";

const Sidenav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState(null);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const handleNavItemClick = (itemName) => {
        setSelectedNavItem(itemName);
        setIsOpen(false); // Close the navigation when an item is clicked
    };

    return (
        <>
            <button onClick={toggleNav} className="burger">
                <img src="./menu-hamburger-nav.svg" alt="Menu" />
            </button>
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <button onClick={toggleNav}>X</button>
                <div className="side-nav-items" onClick={() => handleNavItemClick('Projects')}>
                    Projects
                </div>
                <div className="side-nav-items" onClick={() => handleNavItemClick('Resume')}>
                    Resume
                </div>
                <div className="side-nav-items" onClick={() => handleNavItemClick('Education')}>Educational Attainment</div>
                <div className="side-nav-items" onClick={() => handleNavItemClick('Courses')}>Courses</div>
            </div>
            <div className="main-content">
                {selectedNavItem === 'Projects' && <Projects />}
                {selectedNavItem === 'Resume' && <Resume />}
                {selectedNavItem === 'Education' && <Education />}
                {selectedNavItem === 'Courses' && <Courses />}
            </div>
        </>
    );
};

export default Sidenav;
