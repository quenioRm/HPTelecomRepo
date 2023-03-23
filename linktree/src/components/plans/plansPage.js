import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Api from "../../service/Api";

export const PlansPage = () => {

    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: null,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const [plans, setPlans] = useState([])

    useEffect(() => {
        async function Get(){
            await Api.get("/Web/GetPlans/10")
            .then((response) =>{
                console.log(response.data)
                setPlans(response.data)
            })
            .catch((err) => {
    
            });
        }
        Get()
    },[])

    return(
        <>
        <main className="content">
            <div className="container text-center">
                <div className="packages"> 
                <Slider {...settings}>
                {plans.map((item, key) => (
                  <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 package-list">
                    <div className="package-icon" >
                        <img
                        src={"/assets/images/" + item.icon}
                        alt="velocimentro"
                        className="img-fluid"
                        />
                    </div>
                    <div className="package-info">
                        <h1 style={{fontFamily:"Gordita-Bold"}} className="font-weight-bold">{item.name}</h1>
                        <div className="desc">
                        <ul style={{fontFamily:"Gordita-Regular"}} className="p-0 m-0 m-auto">
                            <li>
                            <i className="fa fa-download" />
                            <strong>Download {item.downSpeed} Mbps</strong>
                            </li>
                            <li style={{fontFamily:"Gordita-Light"}}>
                            <i className="fa fa-arrow-up" />
                            Upload {item.upSpeed} Mbps
                            </li>
                            <br/>
                            <li>
                                <img
                                    src="./assets/images/nofidelity.png"
                                    alt="image"
                                    className="img-fluid d-inline-block"
                                    style={{ paddingRight: 10 }}
                                />
                                {item.description1}
                            </li>
                            <li>
                            <i className="fa fa-wifi" />
                            {item.description2}
                            </li>
                            <li>
                            <img
                                src="./assets/images/fiber.png"
                                alt="image"
                                className="img-fluid d-inline-block"
                                style={{ paddingRight: 10 }}
                            />
                            {item.description3}
                            </li>
                            <li>
                            <i className="fa fa-credit-card" />
                            {item.description4}
                            </li>
                        </ul>
                        </div>
                        <p style={{fontFamily:"Gordita-Light"}}>{item.addTex}</p>
                    </div>
                    <div className="package-price">
                        <span className="sale">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                        <span style={{fontFamily:"Gordita"}} className="price">
                            R${(item.price - item.discount).toFixed(2).replace('.', ',')}<span>/mes</span>
                        </span>
                        <h6 className="font-weight-light">No Boleto via e-mail</h6>
                    </div>
                    <a href={"https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+"+item.name+"+no+seu+site+e+gostaria+de+saber+mais"} target="_blank" className="button">
                        Contratar
                    </a>
                    </div>
                ))}
                </Slider>
                </div>
            </div>
        </main>
        </>
    )
}