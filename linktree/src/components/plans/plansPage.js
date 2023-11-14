import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Api from "../../service/Api";
import LoadingSpinner from "../spinner/LoadingSpinner";
import "./plans.css";
import Benefits from "../plans/beneficios/Benefits"

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
        turboMessageShow: "",
        addPlanIsShow: "",
        addPlanAddPackage: "",
        addPlanaddidiscount: ""
    });
    const [index, setIndex] = useState(0);
    const [isInternetOnly, setIsInternetOnly] = useState(true);
    const [variants, setVariants] = useState({
        downSpeed: 0,
        upSpeed: 0,
        price: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setIsLoading(true);
        async function Get() {
            await Api.get("/Web/GetNewPlans")
                .then((response) => {
                    setPlans(response.data.prices);
                    setPlansAdd(response.data.pricesAdd);
                    setIsLoading(false);
                })
                .catch((err) => {

                });
        }
        Get()
    }, [])
    
    useEffect(() => {
        toggle(false);
        // setIsInternetOnly(!isInternetOnly);
        
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

        // document.getElementById("isInternetOnly").checked = true;
    },[index, plans, plan])

 

    const handleChange = ({target}) => {
        if(document.getElementById("isInternetOnly").checked === true){
            setIsInternetOnly(false);
            document.getElementById("isInternetOnly").checked = false;
        }else{
            var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
            
            let falseCount = 0;

            for (var i = 0; i < checkboxes.length; i++) {
               if(checkboxes[i].id !== "isInternetOnly"){
                    if(checkboxes[i].checked === true){
                        falseCount++;
                    }
                        
               }   
            }

            if(falseCount === 0){
                setIsInternetOnly(true);
                document.getElementById("isInternetOnly").checked = true;
            }
        }

        if (target.checked){
           target.removeAttribute('checked');
        //    target.parentNode.style.textDecoration = "";
           ChangePlan(target.name, true);
        } else {
           target.setAttribute('checked', true);
        //    target.parentNode.style.textDecoration = "line-through";
           ChangePlan(target.name, false);
        }
    }

    const handleInternetCheckboxChange = ({target}) => {
        if(plan.addPlanIsShow === 0){
            document.getElementById("isInternetOnly").checked = true;
            return;
        }
        if (target.checked){
            toggle(false);
            target.removeAttribute('checked');
            // target.parentNode.style.textDecoration = "";
            setVariants({
                downSpeed: plan.downSpeed,
                upSpeed: plan.upSpeed,
                price: plan.price
            });
        }else{
            toggle(true);
            target.setAttribute('checked', true);
            // target.parentNode.style.textDecoration = "line-through";

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
        if(plan.addPlanIsShow === 1){
            plansAdd.forEach(x => { 
                document.getElementById(x.Id).checked = status;
                // ChangePlan(x.Id, status);
            })
        }
    }

    function ChangePlan(id, status){

        let downSpeed = variants.downSpeed;
        let upSpeed = variants.upSpeed;
        let price = variants.price;


        plansAdd.forEach(x => {
            if(x.Id === parseInt(id)){
                if(status === true){
                    downSpeed += plan.addPlanAddPackage === 1 ? x.downSpeedBonus : 0;
                    upSpeed += plan.addPlanAddPackage === 1 ? x.upSpeedBonus : 0;
                    price += x.price + plan.addPlanaddidiscount;
                }else{
                    downSpeed -= plan.addPlanAddPackage === 1 ?  x.downSpeedBonus : 0;
                    upSpeed -= plan.addPlanAddPackage === 1 ? x.upSpeedBonus : 0;
                    price -= x.price + plan.addPlanaddidiscount;
                }
            }
        })

        setVariants({
            downSpeed: downSpeed,
            upSpeed: upSpeed,
            price: price
        });
    }

    const [indexPlano, setIndexPlano] = useState("ativo");

    function contact() {

        let planContact = "";

        if (isInternetOnly === true) {

            planContact = "https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+"+plan.downSpeed+"+MEGAS+no+seu+site+e+gostaria+de+saber+mais";
            
        }else {
            planContact = "https://wa.me/551128762641?text=Ol%C3%A1%2C+montei+este+combo+"+plan.downSpeed+"+e+gostaria+de+saber+mais!";
        }

        return planContact;
    }

    

    return (
        <>
        <ul className= {`index-planos ${indexPlano}`}>
            <li className= {`${indexPlano}`} >Planos Mensal</li>
            <li>Planos Semestral</li>
            <li>Planos Anual</li>
        </ul>
            <main className="content">
                
                <div className="container text-center">
                <div className="packages">
                <Slider {...settings}>
                            <>
                            {isLoading ? <LoadingSpinner /> :
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
                                                        alt="Sem Fidelidade"
                                                        className="img-fluid d-inline-block"
                                                        style={{ paddingRight: 10 }}
                                                    />
                                                    {plan.firstDescription}
                                                </li>

                                                <li  hidden={plan.downSpeed === 300 ? true : (plan.downSpeed && variants.downSpeed >= 500 ? false : true)}>
                                                    <img src="./assets/images/365-plan.png" 
                                                    className="img-fluid d-inline-block"
                                                    style={{ paddingRight: 10, paddingBottom: 7 }}
                                                    alt="Pacote Microsft 365 Completo"
                                                    />
                                                    {plan.thirdDescription}
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
                                                        <input id="isInternetOnly" type="checkbox" name="interNetOnly" 
                                                         onChange={handleInternetCheckboxChange}
                                                         defaultChecked={isInternetOnly}
                                                         value="true">
                                                        
                                                        </input>
                                                        Apenas internet
                                                    </div>
                                                </li>
                                                <br/>
                                                {plansAdd.map((item) => (
                                                    plan.addPlanIsShow === 1 ?
                                                    <li key={item.Id}>
                                                        <div className="list-bt" style={{ fontFamily: "Gordita", fontWeight: "500" }}>
                                                            <input id={item.Id}type="checkbox" name={item.Id} value="false"
                                                            onChange={handleChange}
                                                            ></input>
                                                            {item.name}
                                                        </div>
                                                        {item.downSpeedBonus > 0 && plan.addPlanAddPackage === 1?
                                                        (<span className="bonus">Ganhe + {item.downSpeedBonus} Mega</span>)
                                                        :<><br /></>}
                                                    </li>
                                                    :<></>
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
                                    {isInternetOnly === false? 
                                    <div>
                                        <h3 style={{ fontFamily: "Gordita", fontWeight: "bold", fontSize: "20px" }}>Você irá receber</h3>
                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "20px" }} className="price">{variants.downSpeed} Megas</span>
                                    </div>
                                    :<></>
                                    }
                                    <br />

                                    <div className="package-price">
                                        <span className="sale">R$ {(variants.price - 0).toFixed(2).replace('.', ',')}</span>
                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "40px" }} className="price">
                                        R${(variants.price - (variants.price > 0 ? plan.discount : 0)).toFixed(2).replace('.', ',')}<span style={{ color: "#000", fontWeight: "500" }}>/mês</span>
                                        </span>
                                    </div>
                                    <a href={contact()} target="_blank" className="button" rel="noreferrer">
                                        Assine Já
                                    </a>

                                    <a href="#">
                                        <h6>(<span className="channel">Confira todos os canais</span>)</h6>
                                    </a>
                                </div>}
                            </>
                        </Slider>
                    </div>
			<Benefits />
                </div>
            </main>
        </>
    )
}