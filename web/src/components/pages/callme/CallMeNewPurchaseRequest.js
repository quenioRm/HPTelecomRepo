import React, { useEffect } from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";
import CallMeService from "./services/CallMeService";
import ValidateForm from "../../../services/ValidateForm";
import InputMask from "react-input-mask/lib/react-input-mask.development";

export const CallMeNewPurchaseRequest = ({submitForm}) => {

    let pageName = ""

    const {
        handleChange, 
        handleSendMail,
        handlePlans,
        values, 
        errors,
        plans
    } = CallMeService(submitForm,
        ValidateForm)

    useEffect(() => {
        handlePlans()
    }, [])

    return(
        <>
        <BreadCrumb pageName={pageName} />
        <section className="overview-block-ptb">
            <div className="container">
                  <div className="row">
                  <div className="col-sm-12">
                      <div className="heading-title">
                      <h3 className="title iq-tw-5 iq-mb-20">Fale conosco <span style={{color:"#008C1E"}}>HP Telecom</span></h3>
                      <p>
                      Não sabe qual plano contratar? Tem dúvidas de qual possa atender melhor a sua demanda? 
                      Fale conosco e te recomendaremos o melhor plano com base no seu perfil de utilização. Preencha o formulário abaixo
                      e entraremos em contato.
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
                                <select name="PlanId" className="form-control" value={values.PlanId} onChange={handleChange}>
                                    <option selected="">Selecione</option>
                                    {plans.map((item,key) => (
                                        <option key={key} value={item.Id}>{item.name} - R${item.price.toFixed(2).replace('.', ',')}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                            <InputMask className="form-control" name="Cep" mask="99999-999" placeholder="Cep"
                             value={values.Cep} onChange={handleChange} />
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