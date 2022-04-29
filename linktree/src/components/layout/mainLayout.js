import React from "react";
import { HeaderLayout } from "./headerLayout";

export const MainLayout = ({children}) => {
    return(
        <>
        <HeaderLayout />
        {children}
        </>
    )
}