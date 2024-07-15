import React from "react";
import './App.css';
import Sidenav from "./Sidenav";

function Header(){
    return(
        <nav className="main-nav">
             <Sidenav />
             <p className="main-nav-p">Duplication</p>
             <div className="main-nav-img-container">
             <img src="./WAT.png" />
             </div>
        </nav>
    )
}

export default Header;