import React, { useEffect } from "react";
import { PlanService } from "./services/PlanService";

export const HomeMainPrices = () => {

    const {
        plans,
        handleRelevantPlans
    } = PlanService()


    useEffect(() => {
        handleRelevantPlans()
    }, [])

    return (
        <section className="overview-block-ptb grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading-title">
                            <h3 className="title iq-tw-5 iq-mb-20">Escolha um dos nossos planos e seja <span style={{ color: "#008C1E" }}>HP Telecom</span></h3>
                            <p>
                                Não sabe qual plano contratar? Tem dúvidas de qual possa atender melhor a sua demanda?
                                Fale conosco e te recomendaremos o melhor plano com base no seu perfil de utilização.
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
                                            position: "relative",
                                            top: "-8px"
                                        }}
                                    >
                                    </img>
                                </span>
                                <div className="iq-pricing">
                                    <div className="pricing-header">
                                        <span style={{ fontSize: "30px" }} className="planName">{item.name}</span>
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
                                        <li id="fibra">
                                            <span>{item.description3}</span>
                                        </li>
                                        <li id="clube">
                                            <span>{item.description4}</span>
                                        </li>
                                    </ul>

                                    <div class="line-divisor"></div>

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
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}