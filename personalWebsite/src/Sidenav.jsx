import React, {useState} from "react";
import './App.css';

const Sidenav= () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () =>{
        setIsOpen(!isOpen);
    };

    return(
       <>
        <button onClick={toggleNav} className="burger"><img src="./menu-hamburger-nav.svg" /></button>
        <div className={`side-nav ${isOpen ?'open': ''}`}>
            <button onClick={toggleNav}>X</button>
           <div className="side-nav-items">Projects</div>
           <div className="side-nav-items">Resume</div>
           <div className="side-nav-items">Educational Attainment</div>
           <div className="side-nav-items">Courses</div>
        </div>
        </>
    )
}
export default Sidenav;