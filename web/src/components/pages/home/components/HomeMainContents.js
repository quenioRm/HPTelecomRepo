import react, {useEffect} from "react";
import { HomeMainComents } from "./HomeMainComents";
import { HomeMainOverView } from "./HomeMainOverView";
import { HomeMainPrices } from "./HomeMainPrices";
import { HomePromotion } from "./HomePromotion";

export const HomeMainContent = () => {

    return(
        <>
        {/* overview */}
        <HomeMainOverView />
        {/* Coments */}
        <HomeMainComents />
        {/* Prices */}
        <HomeMainPrices />    
        {/*  */}
        <HomePromotion />
        </>
    )
}