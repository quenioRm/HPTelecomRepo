import react, { useEffect } from "react";
import { HomeBanner } from "./components/HomeBanner";
import { HomeMainContent } from "./components/HomeMainContents";

export const Home = () => {

    return(
        <div>
            <HomeBanner />
            <HomeMainContent />
        </div>
    )
}