import React from "react";
import './App.css'
const Education = () => {
    return (
        <div className='projects-body'>
           <h1 className='h1-project'>Education</h1>
            <div className='projects-container'>
            <a href='https://www.seaitt.com/' target='_blank'><div className="projects"><img src='./shs.jpg'/><p>South-East Asia Institute of Trade and Technology</p></div></a>
            <a href='https://qcu.edu.ph/' target='_blank'><div className="projects"><img src='./shs.jpg'/><p>Quezon City University</p></div></a>
            </div>
        </div>
    );
}

export default Education;