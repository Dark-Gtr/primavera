import React, { useEffect } from "react";
import './Navbar.css';
import {IoMenu} from 'react-icons/io5';


const openMenu = () => {
    const navbar =  document.querySelector('nav');
    const button = document.querySelector('.button-navbar');
    button.classList.toggle('button-navbar-active');
    navbar.classList.toggle('navbar-active');
    
}

const navbarBackground = [
    {background: './NuevaCarpeta/20170123_130952.jpg'}
]

const navbarBackgroundRandom = (array) => {
    const navbarStyles = document.styleSheets[3].cssRules[2].style;
    console.log(navbarStyles);
    
    /* navbarStyles[4].cssRules[2].style.backgroundColor = 'blue'; */
}

navbarBackgroundRandom()


const Navbar = () =>{
    return(
        <nav>
            <button className="button-navbar" onClick={openMenu}>
                <IoMenu />
            </button>
        </nav>
    )
}

export {Navbar};