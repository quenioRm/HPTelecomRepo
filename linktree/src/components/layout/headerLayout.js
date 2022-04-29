import React from "react";
import { Link } from "react-router-dom";

export const HeaderLayout = () => {
    return(
        <>
        <header>
            <div className="container text-center">
                <div className="row justify-content-center">
                <a href="/"><i className="fa fa-home" /></a>
                </div>
            </div>
        </header>
        </>
    )
}