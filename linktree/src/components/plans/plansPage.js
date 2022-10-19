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
        async function Get() {
            await Api.get("/Web/GetPlans/10")
                .then((response) => {
                    console.log(response.data)
                    setPlans(response.data)
                })
                .catch((err) => {

                });
        }
        Get()
    }, [])

    return (
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
                                        <div class="price-plan">
                                            <img class="plus" src="./assets/images/icons/minus.svg"
                                                alt="menos"/>
                                            <h1 style={{ fontFamily: "Gordita", fontSize:"40px" }} className="font-weight-bold">{item.name}</h1>
                                            <img class="plus" src="./assets/images/icons/plus.svg"
                                                alt="mais"/>
                                        </div>
                                        <div className="desc">
                                            <ul style={{ fontFamily: "Gordita-Regular" }} className="p-0 m-0 m-auto">
                                                <li>
                                                    <i className="fa fa-download" />
                                                    <strong>Download {item.downSpeed} Mbps</strong>
                                                </li>
                                                <li style={{ fontFamily: "Gordita-Light" }}>
                                                    <i className="fa fa-arrow-up" />
                                                    Upload {item.upSpeed} Mbps
                                                </li>
                                                <br />
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
                                                    <i className="fa fa-credit-card" />
                                                    {item.description4}
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="line-divisor"></div>

                                        <div class="container-new-list">
                                            <div class="container-bt">
                                            </div>
                                            <ul>

                                                <li>
                                                    <div class="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                        <input id="btn1" type="checkbox" name="" value=""></input>
                                                        Apenas internet
                                                    </div>

                                                </li>

                                                <br />

                                                <li>
                                                    <div class="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                        <input id="btn1" type="checkbox" name="" value=""></input>
                                                        Telefone ilimitado
                                                    </div>
                                                    (<span class="bonus">Ganhe + X Mega</span>)

                                                </li>

                                                <br />

                                                <li>
                                                    <div class="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                        <input id="btn1" type="checkbox" name="" value=""></input>
                                                        Tv (91 canais) + VOD <br />

                                                    </div>
                                                    (<span class="bonus">Ganhe + X Mega</span>)
                                                </li>

                                                <br />

                                                <li>

                                                    <div class="list-bt" >

                                                        <div class="content-turbo">
                                                            <div class="icon-turbo">
                                                                <img hidde class="turbo" src="./assets/images/fire.gif" />
                                                                <img class="turbo icon-velocidade" src="./assets/images/turbo.svg" />
                                                            </div>

                                                            <div><span style={{ fontFamily: "Gordita", fontWeight: "500" }}>Turbo das 1h as 6h</span> <br /> (<span class="bonus">999 mega no Turbo</span>)
                                                                <br />
                                                                (<span class="bonus">saiba mais</span>)
                                                            </div>

                                                        </div>

                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <p style={{ fontFamily: "Gordita", fontWeight: "500", fontSize: "14px" }}>Pagando até o vencimento <br />  você ganha R$10 de desconto</p>
                                    </div>
                                    <div className="package-price">
                                        <span className="sale">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "40px" }} className="price">
                                            R${(item.price - item.discount).toFixed(2).replace('.', ',')}<span style={{ color: "#000", fontWeight: "500" }}>/mês</span>
                                        </span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=551128762641" target="_blank" className="button">
                                        Contratar
                                    </a>

                                    <a href="#">
                                        <h6>(<span className="channel">Confira todos os canais</span>)</h6>
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