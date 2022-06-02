import React,{useEffect} from "react";
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
                <div className="row mt-2">
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
                        <span style={{fontSize:"30px"}} className="planName">{item.name}</span>
                        {/* <span className="price-value">R$ {item.price.toFixed(2).replace('.', ',')}</span> */}
                    </div>
                    <div className="desc-plano-top">
                    <ul>
                        <li>
                            <img src="/images/plans/Download.png" />
                            <span className="downloadFont">Download até {item.downSpeed} Mbps</span>
                        </li>
                        <li style={{position:'relative', top:'5px'}}>
                            <img style={{position:"relative", left:"-1.4em"}} src="/images/plans/Upload.png" />
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

                    <div className="vencimento">
                        <p>Pagando antes do vencimento você ganha R$10 de desconto.</p>
                    </div>

                    <p>
                        <h4 className="price-value2"> R$ {item.price.toFixed(2).replace('.', ',')}</h4>
                        <h3 className="price-value"> R$ {(item.price - item.discount).toFixed(2).replace('.', ',')}</h3>
                    </p>
                    
                    <a className="button" href="https://api.whatsapp.com/send?phone=551128762641" target="_blank">
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