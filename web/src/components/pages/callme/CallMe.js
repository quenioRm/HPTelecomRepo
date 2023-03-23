import React from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";
import HomeService from "../home/components/services/HomeService";
import ValidateForm from "../../../services/ValidateForm";
import InputMask from "react-input-mask/lib/react-input-mask.development";

export const CallMe = ({submitForm}) => {

    let pageName = ""

    const {
        handleChange, 
        handleSendMail,
        values, 
        errors,
        cepMessage
    } = HomeService(submitForm,
        ValidateForm)

    return(
        <>
        <BreadCrumb pageName={pageName} />
        <section className="overview-block-ptb">
            <div className="container">
                  <div className="row">
                  <div className="col-sm-12">
                      <div className="heading-title">
                      <h3 className="title iq-tw-5 iq-mb-20">Envie um e-mail para <span style={{color:"#008C1E"}}>Hayp</span></h3>
                      <p>
                      Não sabe qual plano contratar? Tem dúvidas de qual possa atender melhor a sua demanda? 
                      Fale conosco e te recomendaremos o melhor plano com base no seu perfil de utilização.
                      </p>
                      </div>
                  </div>
                  </div>
                
                    <form onSubmit={handleSendMail}>
                        <div className="row">
                            <div className="col">
                            <input className="form-control" name="Name" placeholder="Nome"
                            value={values.Name} onChange={handleChange} />
                            </div>
                            <div className="col">
                            <InputMask className="form-control" name="Telephone" mask="(99) 99999-9999" placeholder="Telefone"
                            value={values.Telephone} onChange={handleChange} />
                            </div>
                        </div>
                        <br>
                        </br>
                        <div className="row">
                            <div className="col">
                            <textarea class="form-control" style={{height:"203px"}} name="Text" cols="40" rows="5" placeholder="Mensagem"
                            value={values.Text} 
                            onChange={handleChange} 
                            />
                            </div>
                        </div>
                        <br></br>
                        <button className="btn btn-success">Enviar</button>
                    </form>
           
            </div>
        </section>
        </>
    )
}