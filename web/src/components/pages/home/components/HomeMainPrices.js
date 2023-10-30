import React, { useEffect, useState } from "react";
import { PlanService } from "./services/PlanService";


export const HomeMainPrices = () => {

    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [desativado, setDesativado] = useState("desativado");
    const [extraBonus, setExtraBonus] = useState(0)


    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1);
        if (checkbox2 || checkbox3) {
            setCheckbox2(false);
            setCheckbox3(false);
            setDesativado('desativado');
        } else if (checkbox1) {
            setCheckbox2(true);
            setCheckbox3(true);
            setDesativado('ativado')
            setExtraBonus(200)
        }

    };

    const handleCheckbox2Change = () => {
        setCheckbox2(!checkbox2);
        if (checkbox2 && !checkbox3) {
            setCheckbox1(true);
            setDesativado('desativado')


        } else {
            setCheckbox1(false);
            setDesativado('ativado');


        }
    };

    const handleCheckbox3Change = () => {
        setCheckbox3(!checkbox3);
        if (checkbox3 && !checkbox2) {
            setCheckbox1(true);
            setDesativado('desativado')


        } else {
            setCheckbox1(false);
            setDesativado('ativado')


        }
    };

    const {
        plans,
        handleRelevantPlans
    } = PlanService()


    useEffect(() => {
        handleRelevantPlans()
    }, [])

    const [plan, setPlan] = useState();

    return (

        <div className="box-plano home">
                            {plans.map((item, key) => (
                                <div key={key} className="col-lg-3 col-md-6 col-sm-12" class={`box-plan animation-${plan}`}>
                                    <span className="icon" class="icon-p">
                                        <img className="icon-velocidad"
                                            src={`images/another/${item.icon}`}
                                        />

                                    </span>
                                    <div className="iq-pricing">
                                        <div className="pricing-header">
                                            <span className="planName">{item.name}</span>
                                            {/* <span className="price-value">R$ {item.price.toFixed(2).replace('.', ',')}</span> */}
                                        </div>
                                        <div className="desc-plano-top">
                                            <ul>
                                                <li>
                                                <div className="icon-download" ></div>
                                                    <span className="downloadFont">Download até {item.downSpeed} Mbps</span>
                                                </li>
                                                <li>
                                                <div className="icon-upload" ></div>
                                                    <span> Upload até {item.upSpeed} Mbps</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="ulPlan">
                                            <li className="icone-benefits">
                                            <div className="icon-semFidelidade" ></div>
                                                <span>{item.description1}</span>
                                            </li>
                                            <li className="icone-benefits" hidden={item.downSpeed === 300 ? true : (item.downSpeed && (item.downSpeed + (checkbox2 ? +100 : 0) + (checkbox3 ? +100 : 0)) >= 500 ? false : true)}>
                                                <img

                                                    src="/images/plans/365-plan-red.svg"

                                                    alt="Pacote Microsoft 365 completo"
                                                />
                                                <span>{item.description3}</span>
                                            </li>

                                            <li className="icone-benefits" >
                                            <div className="icon-wifi" ></div>
                                                <span>{item.description2}</span>
                                            </li>
                                            <li className="icone-benefits">
                                            <div className="icon-card" ></div>
                                                <span>{item.description4}</span>
                                            </li>
                                        </ul>
                                        <div class="line-divisor"></div>
                                        <div class="container-new-list">
                                            <div class="container-bt">
                                            </div>
                                            <ul >
                                                <li>
                                                    <div class="list-bt">
                                                        <input id="bt1Internet" type="checkbox" checked={item.downSpeed === 900 ? true : checkbox1} disabled={item.downSpeed === 900 ? true : false} onChange={handleCheckbox1Change}></input>
                                                        <span className="info-list-bt">Apenas internet</span>
                                                    </div>
                                                </li>
                                                <br />
                                                <li hidden={item.downSpeed === 900}>
                                                    <div class="list-bt">
                                                        <label >
                                                            <input id="bt2Telefone" type="checkbox" name="" value="Telefone" onChange={handleCheckbox2Change} checked={checkbox2}></input>
                                                        </label>
                                                        <span className="info-list-bt">Telefone ilimitado</span>
                                                    </div>
                                                    (<span class="bonus">Ganhe + 100 Mega</span>)
                                                </li>
                                                <br />
                                                <li hidden={item.downSpeed === 900}>
                                                    <div class="list-bt" >
                                                        <input id="bt3Tv" type="checkbox" name="" value="Tv" onChange={handleCheckbox3Change} checked={checkbox3}></input>
                                                        <spam className="info-list-bt">Tv ( + de 90 canais) <br /> + filmes e séries <br /></spam>
                                                    </div>
                                                    (<span class="bonus">Ganhe + 100 Mega</span>)
                                                </li>
                                                <br />
                                                <li>
                                                    <div class="list-bt" >
                                                        <div hidden class="content-turbo">
                                                            <div class="icon-turbo">
                                                                <img hidde class="turbo" src="/images/plans/fire.gif" alt="Icone do turbo" />
                                                                <img class="turbo icon-velocidade" src="/images/plans/turbo.svg" alt="turbo" />
                                                            </div>
                                                            <div>Turbo das 1h as 6h
                                                                <br />
                                                                (<span class="bonus">999 mega no Turbo</span>)
                                                                <br />
                                                                (<span class="bonus">saiba mais</span>)
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div hidden={item.downSpeed === 900 ? true : false} className={`bonus-de-mega bonus-${desativado}`}>
                                                        <h3>Você irá receber:</h3>

                                                        <p>
                                                            {item.downSpeed + (checkbox2 ? +100 : 0) + (checkbox3 ? +100 : 0)} Mega
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <br />
                                        <div>
                                            <h4 className="price-value2"> R$ {(item.price + (checkbox2 ? +30 : 0) + (checkbox3 ? +90 : 0)) .toFixed(2).replace('.', ',') }
                                            </h4>
                                            <div className="vencimento">
                                                <p>Pagando antes do vencimento você ganha R$10 de desconto.</p>
                                            </div>
                                            <h3 className="price-value"> R$ {(item.price - item.discount + (checkbox2 ? +30 : 0) + (checkbox3 ? +90 : 0)).toFixed(2).replace('.', ',')} <span class="mes-pay">/mês</span></h3>
                                        </div>

                                        
                                        <br />
                                        <a className="button" href= {checkbox1 ? "https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+"+item.name+"+no+seu+site+e+gostaria+de+saber+mais": "https://wa.me/551128762641?text=Ol%C3%A1%2C+montei+este+combo+"+item.downSpeed+ (checkbox3 ? "+de+Tv":"") + (checkbox2 ?"+com+Telefone":"") +"+no+site+e+gostaria+de+saber+mais" } target="_blank">
                                            Assine já
                                        </a>
                                        <br />
                                        <a href= "" style={{ marginTop: "10px" }}>(<span class="channel">confira todos os canais</span>)</a>
                                    </div>
                                </div>
                            ))}
                        </div>
            
    )
    
}