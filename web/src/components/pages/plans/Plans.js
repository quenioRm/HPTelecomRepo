import React, { useEffect } from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";
import { PlanService } from "../home/components/services/PlanService";

export const Plans = () => {

    const pageName = ""

    const {
        plans,
        handlePlans
    } = PlanService()

    useEffect(() => {
        handlePlans(0)
    }, [])

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
                                    Não sabe qual é o melhor plano para sua casa? Tem dúvidas de qual possa atender melhor a demanda da sua empresa?
                                    <br />
                                    Fale conosco e te recomendaremos o melhor plano com base no seu perfil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row content-box-plan">
                        {plans.map((item, key) => (
                            <div key={key} className="col-lg-3 col-md-6 col-sm-12" class="box-plan">
                                <span className="icon" class="icon-p">
                                    <img
                                        src={`images/another/${item.icon}`}
                                        width={80}
                                        style={{
                                            margin: "auto"
                                        }}
                                    >
                                    </img>
                                </span>
                                <div className="iq-pricing">
                                    <div className="pricing-header">
                                        <span style={{ fontSize: "40px" }} className="planName">{item.name}</span>
                                        {/* <span className="price-value">R$ {item.price.toFixed(2).replace('.', ',')}</span> */}
                                    </div>
                                    <div className="desc-plano-top">
                                        <ul>
                                            <li>
                                                <img src="/images/plans/Download.png" />
                                                <span className="downloadFont">Download até {item.downSpeed} Mbps</span>
                                            </li>
                                            <li>
                                                <img src="/images/plans/Upload.png" />
                                                <span> Upload até {item.upSpeed} Mbps</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="ulPlan">
                                        <li id="fidelidade">
                                            <span>{item.description1}</span>
                                        </li>
                                        <li id="wifi">
                                            <span>{item.description2}</span>
                                        </li>
                                        <li id="clube">
                                            <span>{item.description4}</span>
                                        </li>
                                    </ul>

                                    <div class="line-divisor"></div>

                                    <div class="container-new-list">
                                        <div class="container-bt">
                                        </div>
                                        <ul>

                                            <li>
                                                <div class="list-bt">
                                                    <input id="btn1" type="checkbox" name="" value=""></input>
                                                    Apenas internet
                                                </div>
                                                
                                            </li>

                                            <br />

                                            <li>
                                                <div class="list-bt">
                                                    <input id="btn1" type="checkbox" name="" value=""></input>
                                                    Telefone ilimitado
                                                </div>
                                                (<span class="bonus">Ganhe + X Mega</span>)

                                            </li>

                                            <br />

                                            <li>
                                                <div class="list-bt" >
                                                    <input id="btn1" type="checkbox" name="" value=""></input>
                                                    Tv ( 91 canais) + VOD <br />

                                                </div>
                                                (<span class="bonus">Ganhe + X Mega</span>)
                                            </li>

                                            <br />

                                            <li>

                                            <div class="list-bt" >
                                                     
                                                         <div hidden class="content-turbo">
                                                             <div class="icon-turbo">
                                                                 <img hidde class="turbo" src="/images/plans/fire.gif" />
                                                                 <img class="turbo icon-velocidade" src="/images/plans/turbo.svg" />
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

                                        </ul>
                                    </div>
                                        <br/>
                                    <div>
                                        <h4 className="price-value2"> R$ {item.price.toFixed(2).replace('.', ',')}
                                        </h4>

                                        <div className="vencimento">
                                            <p>Pagando antes do vencimento você ganha R$10 de desconto.</p>
                                        </div>

                                        <h3 className="price-value"> R$ {(item.price - item.discount).toFixed(2).replace('.', ',')} <span class="mes-pay">/mês</span></h3>
                                    </div>

                                    <br />

                                    <a className="button" href="https://api.whatsapp.com/send?phone=551128762641" target="_blank">
                                        Assine já
                                    </a>
                                    <br/>
                                <a href="" style={{ marginTop: "10px" }}>(<span class="channel">confira todos os canais</span>)</a>

                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>

                
            </section>
        </>
    )
}