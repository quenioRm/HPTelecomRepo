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
    const [plansAdd, setPlansAdd] = useState([]);
    const [plan, setPlan] = useState({
        name: "",
        icon: "",
        price: "",
        discount: "",
        firstDescription: "",
        secondDescription: "",
        thirdDescription: "",
        fourthDescription: "",
        downSpeed: "",
        upSpeed: "",
        turboMessageShow: ""
    });
    const [index, setIndex] = useState(0);
    const [isInternetOnly, setIsInternetOnly] = useState(true);
    const [variants, setVariants] = useState({
        downSpeed: 0,
        upSpeed: 0,
        price: 0
    });

    useEffect(() => {
        async function Get() {
            await Api.get("/Web/GetNewPlans")
                .then((response) => {
                    setPlans(response.data.prices);
                    setPlansAdd(response.data.pricesAdd);
                })
                .catch((err) => {

                });
        }
        Get()
    }, [])
    
    useEffect(() => {
        toggle(false);
        setIsInternetOnly(!isInternetOnly);
        if(index < 0)
            setIndex(0);
     
            
        if(index >= 0){
           if(plans.length >= 0){
            if(index <= (plans.length -1)){
                setPlan(plans[index]);
                setVariants({
                    downSpeed: plan.downSpeed,
                    upSpeed: plan.upSpeed,
                    price: plan.price
                });
            }else{
                setIndex(plans.length -1);
            }
           }
        }
    },[index, plans, plan])

 

    const handleChange = ({target}) => {
        if(isInternetOnly === true){
            toggle(false);
            return;
        }

        if (target.checked){
           target.removeAttribute('checked');
           target.parentNode.style.textDecoration = "";
           ChangePlan(target.name, true);
        } else {
           target.setAttribute('checked', true);
           target.parentNode.style.textDecoration = "line-through";
           ChangePlan(target.name, false);
        }
    }

    const handleInternetCheckboxChange = ({target}) => {
        if (target.checked){
            toggle(false);
            target.removeAttribute('checked');
            target.parentNode.style.textDecoration = "";
            setVariants({
                downSpeed: plan.downSpeed,
                upSpeed: plan.upSpeed,
                price: plan.price
            });
        }else{
            toggle(true);
            target.setAttribute('checked', true);
            target.parentNode.style.textDecoration = "line-through";

            let downSpeed = plan.downSpeed;
            let upSpeed = plan.upSpeed;
            let price = plan.price;

            plansAdd.forEach(x => {
                downSpeed += x.downSpeedBonus;
                upSpeed += x.upSpeedBonus;
                price += x.price;
            })

            setVariants({
                downSpeed: downSpeed,
                upSpeed: upSpeed,
                price: price
            });
            
        }

        setIsInternetOnly(!isInternetOnly);
    }

    function toggle(status) {
        plansAdd.forEach(x => { 
            document.getElementById(x.Id).checked = status;
            // ChangePlan(x.Id, status);
        })
    }

    function ChangePlan(id, status){

        let downSpeed = variants.downSpeed;
        let upSpeed = variants.upSpeed;
        let price = variants.price;
        
        plansAdd.forEach(x => {
            if(x.Id === parseInt(id)){
                if(status === true){
                    downSpeed += x.downSpeedBonus;
                    upSpeed += x.upSpeedBonus;
                    price += x.price;
                }else{
                    downSpeed -= x.downSpeedBonus;
                    upSpeed -= x.upSpeedBonus;
                    price -= x.price;
                }
            }
        })

        setVariants({
            downSpeed: downSpeed,
            upSpeed: upSpeed,
            price: price
        });
    }

    return (
        <>
            <main className="content">
                <div className="container text-center">
                <div className="packages">
                <Slider {...settings}>
                            <>
                            <div key="plan" className="package-list center">
                                    <div className="package-icon" >
                                        <img
                                            src={"/assets/images/" + plan.icon}
                                            alt="Velocimentro"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="package-info">
                                        <div className="price-plan">
                                            <img className="plus" onClick={() => setIndex(index - 1)} src="./assets/images/icons/minus.svg"
                                                alt="menos"/>
                                            <h1 style={{ fontFamily: "Gordita", fontSize:"40px" }} className="font-weight-bold">{plan.downSpeed} Megas</h1>
                                            <img className="plus" onClick={() => setIndex(index + 1)} src="./assets/images/icons/plus.svg"
                                                alt="mais"/>
                                        </div>
                                        <div className="desc">
                                            <ul style={{ fontFamily: "Gordita-Regular" }} className="p-0 m-0 m-auto">
                                                <li>
                                                    <i className="fa fa-download" />
                                                    <strong>Download {plan.downSpeed} Mbps</strong>
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
                                                    {plan.firstDescription}
                                                </li>

                                                <li>
                                                    <i className="fa fa-wifi" />
                                                    {plan.secondDescription}
                                                </li>

                                                <li>
                                                    <i className="fa fa-credit-card" />
                                                    {plan.fourthDescription}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="line-divisor"></div>

                                        <div className="container-new-list">
                                            <div className="container-bt">
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                        <input id="btn1" type="checkbox" name="interNetOnly" 
                                                         onChange={handleInternetCheckboxChange}
                                                         defaultChecked={isInternetOnly}
                                                         value="true">
                                                        
                                                        </input>
                                                        Apenas internet
                                                    </div>
                                                </li>
                                                <br/>
                                                {plansAdd.map((item) => (
                                                    <li key={item.Id}>
                                                        <div className="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                            <input id={item.Id}type="checkbox" name={item.Id} value="false"
                                                            onChange={handleChange}
                                                            ></input>
                                                            {item.name}
                                                        </div>
                                                        {item.downSpeedBonus > 0?
                                                        (<span className="bonus">Ganhe + {item.downSpeedBonus} Mega</span>)
                                                        :<><br /></>}
                                                    </li>
                                                ))}

                                                <br />
                                                {plan.turboMessageShow === 1 ?
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
                                    
                                    <div>
                                        <h3 style={{ fontFamily: "Gordita", fontWeight: "bold", fontSize: "20px" }}>Você irá receber</h3>
                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "20px" }} className="price">{variants.downSpeed} Megas</span>
                                    </div>
                                    <br />

                                    <div className="package-price">
                                        <span className="sale">R$ {(variants.price - 0).toFixed(2).replace('.', ',')}</span>
                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "40px" }} className="price">
                                        R${(variants.price - (variants.price > 0 ? plan.discount : 0)).toFixed(2).replace('.', ',')}<span style={{ color: "#000", fontWeight: "500" }}>/mês</span>
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
            </main>
        </>
    )
}