import React from "react";
import { Link } from "react-router-dom";
import './header.css';

export const HeaderLayout = () => {
    return(
        <>
        <header hidden>
            <div hidden className="container text-center">
                <div className="row justify-content-center">
                <a href="/">
                    <i className="fa fa-home" />
                </a>
                </div>
            </div>

            <div>
            <a href="/">
                    <div className="icon-home" alt="Botão da Home"></div>
                </a>
            </div>
        </header>
        </>
    )
}