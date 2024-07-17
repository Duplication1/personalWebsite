import React from "react";
import './App.css'
const Courses = () => {
    return (
        <div className='projects-body'>
           <h1 className='h1-project'>Certificates</h1>
            <div className='projects-container'>
            <a href='https://www.freecodecamp.org/fcc7da37b8c-a266-41b9-b555-42ff0d5c35ea' target='_blank'><div className="projects"><img src='./ResponsiveWebDesign-Certification.png'/><p>Responsive Web Design</p></div></a>
            <a href='https://www.facebook.com/story.php/?story_fbid=223427070775381&id=100093242695765' target='_blank'><div className="projects"><img src='./234.png'/><p>IGNITE Summit 2023</p></div></a>
            </div>
        </div>
    );
}

export default Courses;