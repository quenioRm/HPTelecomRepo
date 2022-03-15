import react from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";

export const About = () => {

    let pageName = ""

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
                
                    </div>
                </div>
            </section>
        </>
    )
}