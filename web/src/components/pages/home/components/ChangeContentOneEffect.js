import React, {useEffect, useState} from "react";

export const ChangeContentOneEffect = () => {

    const iconsList = [
        {id : 1, on: "images/hub/icons/1_velocidade_on.png", off: "images/hub/icons/1_velocidade_off.png" },
        {id : 2, on: "images/hub/icons/2_Sem difelidade_on.png", off: "images/hub/icons/2_Sem difelidade_off.png" },
        {id : 3, on: "images/hub/icons/3_suporte_on.png", off: "images/hub/icons/3_suporte_off.png" },
        {id : 4, on: "images/hub/icons/4_Chat_on.png", off: "images/hub/icons/4_Chat_off.png" },
        {id : 5, on: "images/hub/icons/5_Ping_on.png", off: "images/hub/icons/5_Ping_off.png" },
        {id : 6, on: "images/hub/icons/6_Home Office_on.png", off: "images/hub/icons/6_Home Office_off.png" },
        {id : 7, on: "images/hub/icons/7_UDH_on.png", off: "images/hub/icons/7_UDH_off.png" },
        {id : 8, on: "images/hub/icons/8_Clube_on.png", off: "images/hub/icons/8_Clube_off.png" },
    ]

    
    const [ icons , setIcons] = useState({
        1 :"images/hub/icons/1_velocidade_off.png",
        2 :"images/hub/icons/2_Sem difelidade_off.png" ,
        3 :"images/hub/icons/3_suporte_off.png",
        4 :"images/hub/icons/4_Chat_off.png",
        5 :"images/hub/icons/5_Ping_off.png",
        6 :"images/hub/icons/6_Home Office_off.png",
        7 :"images/hub/icons/7_UDH_off.png",
        8 :"images/hub/icons/8_Clube_off.png"
    })


    const handleMouseEnter = id => {

        iconsList.map((icon, key) => {
            if(icon.id === id){
                setIcons({
                    ...icons,
                    [id] : icon.on
                })
            }
        })
        updateSelectCenterImage(id)
    }

    const handleMouseLeave = id => {
        iconsList.map((icon, key) => {
            if(icon.id === id){
                setIcons({
                    ...icons,
                    [id] : icon.off
                })
            }
        })
    }

    const [selectCenterImage, setSelectCenterImage] = useState("images/hub/hub1-8.png");
    
    const [centerImages, setcenterImages] = useState(
        [
            {id : 1, image: "images/hub/hub-linha1-8.png"},
            {id : 2, image: "images/hub/hub-linha2-8.png"},
            {id : 3, image: "images/hub/hub-linha3-8.png"},
            {id : 4, image: "images/hub/hub-linha4-8.png"},
            {id : 5, image: "images/hub/hub-linha5-8.png"},
            {id : 6, image: "images/hub/hub-linha6-8.png"},
            {id : 7, image: "images/hub/hub-linha7-8.png"},
            {id : 8, image: "images/hub/hub-linha8-8.png"},
        ]
    )

    const [selectCenterImageContent, setSelectCenterImageContent] = useState("");

    const [centerImagesContent, setcenterImagesContent] = useState(
        [
            {id : 1, image: "images/hub/hub-centro-1-8.png"},
            {id : 2, image: "images/hub/hub-centro-2-8.png"},
            {id : 3, image: "images/hub/hub-centro-3-8.png"},
            {id : 4, image: "images/hub/hub-centro-4-8.png"},
            {id : 5, image: "images/hub/hub-centro-5-8.png"},
            {id : 6, image: "images/hub/hub-centro-6-8.png"},
            {id : 7, image: "images/hub/hub-centro-7-8.png"},
            {id : 8, image: "images/hub/hub-centro-8-8.png"},
        ]
    )

    const [centerImageOpacity, setCenterImageOpacity] = useState(1);

    const updateSelectCenterImage = async id => {
    
        setCenterImageOpacity(0);
        setSelectCenterImageContent("")

        Object.keys(centerImagesContent).forEach(function(key) {
            if(centerImagesContent[key].id == id){
                setTimeout(() => {
                    setCenterImageOpacity(1);
                    setSelectCenterImageContent(centerImagesContent[key].image)
                }, 2000);
            }
        });
    }

    return{
        handleMouseEnter,
        handleMouseLeave,
        updateSelectCenterImage,
        iconsList,
        icons,
        centerImageOpacity,
        centerImagesContent,
        selectCenterImageContent,
        selectCenterImage
    }
}