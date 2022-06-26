import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Header/Navbar/Navbar";
import { Gallery } from "./Gallery/Gallery";
import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";
import { Reservation } from "./Reservation/Reservation";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="reservation" element={<Reservation/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="menu" element={<Menu/>}/>
                </Routes>
        
            </BrowserRouter>
        </>
    )
}

export {Main}