import react, { useEffect } from "react";
import { HomeBanner } from "./components/HomeBanner";
import { HomeMainContent } from "./components/HomeMainContents";

export const Home = () => {

    var width = window.screen.width
    var height = window.screen.height

    // console.log("My screen resolution is: " + width )

    if(width <= 800){
        window.location.href = 'https://links.hptelecom.com.br/'
    }

    return(
        <div>
            <HomeBanner />
            <HomeMainContent />
        </div>
    )
}