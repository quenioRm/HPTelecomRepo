import react, {useEffect, useState} from "react";
import { HomeMainComents } from "./HomeMainComents";
import { HomeMainOverView } from "./HomeMainOverView";
import { HomeMainPrices } from "./HomeMainPrices";

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
        {/* <HomePromotion /> */}
        </>
    )
}