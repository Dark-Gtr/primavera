import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

const AppUI = () => {
    return (
        <>
            
            <Header></Header>

            <main>
                <Main/>
            </main>
            

            <footer>
                este es el footer
            </footer>

        </>
    )
}

export {AppUI};