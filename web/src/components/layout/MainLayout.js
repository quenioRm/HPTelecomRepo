import react from "react";
import { FooterLayout } from "./FooterLayout";
import { HeaderLayout } from "./HeaderLayout";

export const MainLayout = ({children}) => {
    return(
        <>
        <HeaderLayout />
        {children}
        <FooterLayout />
        </>
    )
}