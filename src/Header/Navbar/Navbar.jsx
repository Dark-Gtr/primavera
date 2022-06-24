import React from "react";
import './Navbar.css';
import {IoMenu, IoHome, IoImage, IoBookmark, IoRestaurant} from 'react-icons/io5';


const openMenu = () => {
    const navbar =  document.querySelector('nav');
    const button = document.querySelector('.button-navbar');
    const menu = document.querySelector('.menu__main-container')
    menu.classList.toggle('menu-active')
    button.classList.toggle('button-navbar-active');
    navbar.classList.toggle('navbar-active');
    
}

/*const navbarBackground = [
    {background: './NuevaCarpeta/20170123_130952.jpg'}
]

const navbarBackgroundRandom = (array) => {
    const navbarStyles = document.styleSheets[3].cssRules[2].style;
    console.log(navbarStyles);
    
     navbarStyles[4].cssRules[2].style.backgroundColor = 'blue'; 
}

navbarBackgroundRandom()*/


const Navbar = () =>{
    return(
        <nav>
            <button className="button-navbar" onClick={openMenu}>
                <IoMenu />
            </button>
            <div className="menu__main-container">
                <ul className="menu-container">
                    <li><IoHome/> <span>Inicio</span> </li>
                    <li><IoImage/> <span>Galeria</span></li>
                    <li><IoBookmark/> <span>Reservas</span></li>
                    <li><IoRestaurant/> <span>Menú</span></li>
                </ul>
            </div>
            
        </nav>
    )
}

export {Navbar};