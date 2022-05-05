import React from "react";
import HomeService from "./service/homeService";
import InputMask from "react-input-mask/lib/react-input-mask.development";
import ValidateForm from "../../service/ValidateForm";

export const HomeSendMailFormPage = ({submitForm}) => {

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
            <div className="col-md-12">
                <h2>Envie-nos um e-mail</h2>
                <br></br>
                <form onSubmit={handleSendMail}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nome</label>
                    <input className="form-control" name="Name"
                    value={values.Name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Telefone</label>
                    <InputMask className="form-control" name="Telephone" mask="(99) 99999-9999"
                    value={values.Telephone} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mensagem</label>
                    <textarea className="form-control" name="Text" cols="40" rows="5" 
                    value={values.Text} 
                    onChange={handleChange} />
                    </div>

                    <button className="btn btn-success">Enviar</button>
                </form>
            </div>
        </>
    )
}