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

    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function Get() {
            await Api.get("/Web/GetNewPlans")
                .then((response) => {
                    setPlans(response.data)
                    setPlan(response.data[index])
                })
                .catch((err) => {

                });
        }
        Get()
    }, [])

    //increase counter
    const goToNext = (e) => {
        e.preventDefault();
        if(index < (plans.length - 1))
            setIndex(count => count + 1);
        
        if(index >= 0)
            setPlan(plans[index]);
    };
   
    //decrease counter
    const goToBack = (e) => {
        e.preventDefault();
        if(index >= 0){
            setIndex(index - 1);
            setPlan(plans[index]);
        }
    };

    return (
        <>
            <main className="content">
                <div className="container text-center">
                    <div className="packages">
                        <Slider {...settings}>
                            <>
                            <div key="plan" className="col-lg-3 col-md-4 col-sm-6 col-xs-12 package-list">
                                    <div className="package-icon" >
                                        <img
                                            src={"/assets/images/" + plan.icon}
                                            alt="velocimentro"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="package-info">
                                        <div className="price-plan">
                                            <img className="plus" onClick={goToBack} src="./assets/images/icons/minus.svg"
                                                alt="menos"/>
                                            <h1 style={{ fontFamily: "Gordita", fontSize:"40px" }} className="font-weight-bold">{plan.name}</h1>
                                            <img className="plus" onClick={goToNext} src="./assets/images/icons/plus.svg"
                                                alt="mais"/>
                                        </div>
                                        <div className="desc">
                                            <ul style={{ fontFamily: "Gordita-Regular" }} className="p-0 m-0 m-auto">
                                                <li>
                                                    <i className="fa fa-download" />
                                                    <strong>Download {plan.description1} Mbps</strong>
                                                </li>
                                                <li style={{ fontFamily: "Gordita-Light" }}>
                                                    <i className="fa fa-arrow-up" />
                                                    Upload {plan.upSpeed} Mbps
                                                </li>
                                                <br />
                                                <li>
                                                    <img
                                                        src="./assets/images/nofidelity.png"
                                                        alt="image"
                                                        className="img-fluid d-inline-block"
                                                        style={{ paddingRight: 10 }}
                                                    />
                                                    {plan.description1}
                                                </li>

                                                <li>
                                                    <i className="fa fa-wifi" />
                                                    {plan.description2}
                                                </li>

                                                <li>
                                                    <i className="fa fa-credit-card" />
                                                    {plan.description4}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="line-divisor"></div>

                                        <div className="container-new-list">
                                            <div className="container-bt">
                                            </div>
                                            <ul>
                                                {plan.isInternetOnly ?
                                                    <li>
                                                        <div className="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                            <input id="btn1" type="checkbox" name="" value="false"></input>
                                                            Apenas internet
                                                        </div>

                                                    </li>
                                                    :
                                                    <></>
                                                }
                                                
                                                <br />

                                                {plan.isPhoneUnlimited === 1 ?
                                                    <li>
                                                        <div className="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                            <input id="btn1" type="checkbox" name="" value="false"></input>
                                                            Telefone ilimitado
                                                        </div>
                                                        (<span className="bonus">Ganhe + X Mega</span>)

                                                    </li>
                                                    :
                                                    <></>
                                                }

                                                <br />

                                                {plan.isTvOnly === 1 ?
                                                    <li>
                                                        <div className="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                            <input id="btn1" type="checkbox" name="" value="false"></input>
                                                            Tv (91 canais) + VOD <br />

                                                        </div>
                                                        (<span className="bonus">Ganhe + X Mega</span>)
                                                    </li>
                                                    :
                                                    <></>
                                                }
                                                <br />

                                                {plan.InternetDescription !== null || plan.InternetDescription === "" ?
                                                    <li>
                                                        <div className="list-bt" >
                                                            <div className="content-turbo">
                                                                <div className="icon-turbo">
                                                                    <img className="turbo" src="./assets/images/fire.gif" />
                                                                    <img className="turbo icon-velocidade" src="./assets/images/turbo.svg" />
                                                                </div>
    
                                                                <div><span style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                                    Turbo das 1h as 6h</span> <br /> (<span className="bonus">999 mega no Turbo</span>)
                                                                    <br />
                                                                    (<span className="bonus">saiba mais</span>)
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                    </li>
                                                    :
                                                    <></>
                                                }
                                            </ul>
                                        </div>
                                        <p style={{ fontFamily: "Gordita", fontWeight: "500", fontSize: "14px" }}>Pagando até o vencimento <br />  você ganha R$10 de desconto</p>
                                    </div>
                                    <div className="package-price">
                                        <span className="sale">R$ {(plan.price - 0).toFixed(2).replace('.', ',')}</span>
                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "40px" }} className="price">
                                        R${(plan.price - plan.discount).toFixed(2).replace('.', ',')}<span style={{ color: "#000", fontWeight: "500" }}>/mês</span>
                                        </span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=551128762641" target="_blank" className="button" rel="noreferrer">
                                        Contratar
                                    </a>

                                    <a href="#">
                                        <h6>(<span className="channel">Confira todos os canais</span>)</h6>
                                    </a>
                                </div>
                            </>
                        </Slider>
                    </div>
                </div>

                <div className="content center">
                    <div>
                        <h2>Internet 100% fibra óptica</h2>
                        <div className="info-content">
                            <div>
                                <img className="icon-info" src="./assets/images/icons/card.svg" alt="Clube de desconto"/>
                                <h4>
                                    Clube de desconto
                                </h4>
                                <p>Uma descrição aqui do que é o Clube desconto e o que o cliente tem a ganhar em escolher um plano com ele, ou montar um plano com ele.</p>
                            </div>
                            <div>
                            <img className="turbo-info" src="./assets/images/fire.gif" />
                            <img className="turbo-info turbo-move" src="./assets/images/turbo.svg" />
                                <h4>
                                    Turbo
                                </h4>
                                <p>Tenho que pensar em um texto legal para poder fazer uma boa descrição do que é o Turbo.
                                <br />
                                <br />
                                *conexões cabeadas</p>
                            </div>
                            <div>
                                <img className="icon-info" src="./assets/images/icons/wifi6.svg" alt="wifi 6"/>
                                <h4>
                                    Wi-Fi 6
                                </h4>
                                <p>Uma descrição aqui do que é o Wi-Fi 6 e o que o cliente tem a ganhar em escolher um plano com ele, ou montar um plano com ele.</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h2>Canais</h2>
                    </div>
                    <div >
                        <h2>Os melhores filmes e séries</h2>
                        <h3>E muito mais...</h3>
                    </div>
                    <div >
                        <h2>Como você quer assinar com a gente?</h2>
                    </div>
                </div>
            </main>
        </>
    )
}