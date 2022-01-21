import React, {useState} from "react";

export const ChangeContentOneEffect = () => {

    const [icons, setIcons] = useState(
        [
            {id : 1, on: "images/hub/icons/1_velocidade_on.png", off: "images/hub/icons/1_velocidade_off.png" },
            {id : 2, on: "images/hub/icons/2_Sem difelidade_on.png", off: "images/hub/icons/2_Sem difelidade_off.png" },
            {id : 3, on: "images/hub/icons/3_suporte_on.png", off: "images/hub/icons/3_suporte_off.png" },
            {id : 4, on: "images/hub/icons/4_Chat_on.png", off: "images/hub/icons/4_Chat_off.png" },
            {id : 5, on: "images/hub/icons/5_Ping_on.png", off: "images/hub/icons/5_Ping_off.png" },
            {id : 6, on: "images/hub/icons/6_Home Office_on.png", off: "images/hub/icons/6_Home Office_off.png" },
            {id : 7, on: "images/hub/icons/7_UDH_on.png", off: "images/hub/icons/7_UDH_off.png" },
            {id : 8, on: "images/hub/icons/8_Clube_on.png", off: "images/hub/icons/8_Clube_off.png" },
        ]
    )

    const [ newicon , setNewIcon] = useState({
        id: "",
        image: ""
    })

    const handleMouseEnter = id => {
        icons.map((icon, key) => {
            if(icon.id === id){
                setNewIcon({
                    id: id,
                    image: icon.on
                })
            }
        })
    }

    const handleMouseLeave = id => {
        icons.map((icon, key) => {
            if(icon.id === id){
                setNewIcon({
                    id: id,
                    image: icon.off
                })
            }
        })
    }

    return{
        handleMouseEnter,
        handleMouseLeave,
        icons,
        newicon
    }
}