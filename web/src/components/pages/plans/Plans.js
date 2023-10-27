import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";
import { PlanService } from "../home/components/services/PlanService";
import Benefits from "./Benefits";
import './plans.css';

export const Plans = () => {
    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [desativado, setDesativado] = useState("desativado");


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

    const pageName = ""

    const {
        plans,
        handlePlans
    } = PlanService()

    useEffect(() => {
        handlePlans(0)
    }, [])

    const [plan, setPlan] = useState();


    return (
        <>
            <BreadCrumb pageName={pageName} />
            <section className="overview-block-ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-title">
                                <h3 className="title iq-tw-5 iq-mb-20">Internet <span style={{ color: "#008C1E" }}>100%</span> Fibra Óptica</h3>
                                <p>
                                    Não sabe qual é o melhor plano para sua casa?<br />Tem dúvidas de qual possa atender melhor a demanda da sua empresa?
                                    <br />
                                    <br />
                                    <span style={{ color: "#008C1E" }}><a target="_blank" rel="noreferrer" href="https://wa.me/551128762641?text=Ol%C3%A1%2C+estou+em+dúvida+de+qual+plano+escolher,+preciso+de+uma+ajuda">Mande uma mensagem</a></span> que vamos te ajudar a escolher o melhor plano com base no seu perfil.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="conteiner-plan">
                        <div style={{ opacity: `${1}` }}>
                            <button className="button-plan-seta esquerda" onClick={() => {

                                setPlan(1);

                            }}>
                                <img src="/images/plans/Seta-esquerda.png" alt="seta para ver planos entre 100 a 400 Mega" /></button>
                        </div>

                        <div className="box-plano">
                            {plans.map((item, key) => (
                                <div key={key} className={`col-lg-3 col-md-6 col-sm-12 box-plan animation-${plan}`}>
                                    <span className="icon" class="icon-p">
                                        <img className="icon-velocidad"
                                            alt="Icone de velocidade"
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
                                                    <span style={{ fontFamily: "GorditaFontLite" }}> Upload até {item.upSpeed} Mbps</span>
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
                                            <h4 className="price-value2"> R$ {item.downSpeed === 900 ? ("209,90") : (item.price + (checkbox2 ? +30 : 0) + (checkbox3 ? +90 : 0)).toFixed(2).replace('.', ',')}
                                            </h4>
                                            <div className="vencimento">
                                                <p>Pagando antes do vencimento você ganha R$10 de desconto.</p>
                                            </div>
                                            <h3 className="price-value"> R$ {item.downSpeed === 900 ? ("199,90") : (item.price - item.discount + (checkbox2 ? +30 : 0) + (checkbox3 ? +90 : 0)).toFixed(2).replace('.', ',')} <span className="mes-pay">/mês</span></h3>
                                        </div>

                                        {console.log(item)}


                                        <br />
                                        <a className="button" href={checkbox1 ? "https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+" + item.name + "+no+seu+site+e+gostaria+de+saber+mais" : "https://wa.me/551128762641?text=Ol%C3%A1%2C+montei+este+combo+" + item.downSpeed + (checkbox3 ? "+de+Tv" : "") + (checkbox2 ? "+com+Telefone" : "") + "+no+site+e+gostaria+de+saber+mais"} target="_blank" rel="noreferrer">
                                            Assine já
                                        </a>
                                        <br />
                                        <a href="https://wa.me/551128762641?text=Fiquei+interessado+no+combo+com+Tv+e+gostaria+ver+a+lista+de+canais." style={{ marginTop: "10px", fontFamily: "GorditaFontRegular" }}>(<span class="channel">confira todos os canais</span>)</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ opacity: `${1}` }}>
                            <button className="button-plan-seta direita" onClick={() => {

                                setPlan(2)
                            }} ><img src="/images/plans/Seta-direita.png" alt="seta para ver planos entre 500 a 900 Mega" /></button>


                        </div>
                    </div>

                    <div className="manual-navegator" hidden>
                        <label className="manual-btn" onClick={() => {
                            setPlan(1)
                        }}></label>
                        <label className="manual-btn" onClick={() => {
                            setPlan(2)
                        }} ></label>
                    </div>
                </div>

                <Benefits />
            </section>
        </>
    )
}
export default Plans;