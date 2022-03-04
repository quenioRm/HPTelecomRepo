import React,{useEffect} from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";
import { PlanService } from "../home/components/services/PlanService";

export const Plans = () => {
    
    const pageName = "Planos"

    const {
        plans,
        handlePlans        
    } = PlanService()

    useEffect(() => {
        handlePlans(0)
    },[])

    return(
        <>
        <BreadCrumb pageName={pageName} />
        <section className="overview-block-ptb">
            <div className="container">
                  <div className="row">
                  <div className="col-sm-12">
                      <div className="heading-title">
                      <h3 className="title iq-tw-5 iq-mb-20">Escolha um dos nossos planos e seja <span style={{color:"#008C1E"}}>HP Telecom</span></h3>
                      <p>
                      Não sabe qual plano contratar? Tem dúvidas de qual possa atender melhor a sua demanda? 
                      Fale conosco e te recomendaremos o melhor plano com base no seu perfil de utilização.
                      </p>
                      </div>
                  </div>
                  </div>
                <div className="row">
                {plans.map((item, key) => (
                    <div key={key} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="iq-pricing">
                            <span className="icon">
                                <img
                                src={`images/another/${item.icon}`} 
                                width={80}
                                style={{
                                    position:"relative",
                                    top:"-8px"
                                }}
                                >
                                </img>
                            </span>
                            <div className="pricing-header">
                                <h3 className="title">{item.name}</h3>
                                <span className="price-value">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <ul className="pricing-content">

                                {item.description1 ?
                                    <li>
                                        <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                                        {item.description1}
                                    </li>
                                    :
                                    <></>
                                }

                                {item.description2 ?
                                    <li>
                                        <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                                        {item.description2}
                                    </li>
                                    :
                                    <></>
                                }

                                {item.description3 ?
                                    <li>
                                        <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                                        {item.description3}
                                    </li>
                                    :
                                    <></>
                                }

                                {item.description4 ?
                                    <li>
                                        <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                                        {item.description4}
                                    </li>
                                    :
                                    <></>
                                }

                                <br>
                                </br>
                                <br>
                                </br>

                                {item.addTex ?
                                    <li>
                                        <i/>
                                        <p>
                                        {item.addTex}
                                        </p>
                                    </li>
                                    :
                                    <></>
                                }

                            </ul>
                            <a className="button" href="#">
                                Fale com um atendente
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}