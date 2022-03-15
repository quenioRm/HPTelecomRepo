import React, { useState } from "react";
import Api from "../../../../../services/Api"

export const PromoService = () => {

    const [promos, setPromos] = useState([])

    const handlePromos = async () => {
        await Api.get("Web/GetPromos")
        .then((response) =>{
            setPromos(response.data);
        })
        .catch((err) => {

        });
    }

    return{
        promos,
        handlePromos
    }
}