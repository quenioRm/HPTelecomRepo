import react, { useEffect } from "react";
import { HomeBanner } from "./components/HomeBanner";
import { HomeMainContent } from "./components/HomeMainContent";

export const Home = () => {

    return(
        <div>
            <HomeBanner />
            <HomeMainContent />
        </div>
    )
}