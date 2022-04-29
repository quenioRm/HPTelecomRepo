import React, { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap"
import HomeService from "./service/homeService"
import ValidateForm from "../../service/ValidateForm"
import Swal from "sweetalert2"

export const HomeCepCheck = (props, {submitForm}) => {

    const {
        handleChange, 
        handleSubmitCheckCep,
        values, 
        errors,
        cepMessage
    } = HomeService(      
        submitForm,
        ValidateForm)

    return(
        <>
            <Modal
              show={props.isOpen}
              onHide={props.toggle}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
            <div className="modal-header">
              <h5 className="modal-title" id="loginLabel">
                  Consulte a disponibilidade
              </h5>
              <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  >
              <span aria-hidden="true" onClick={props.toggle}>×</span>
              </button>
            </div>
            <form onSubmit={handleSubmitCheckCep}>
              <Modal.Body>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Digite o cep</label>
                <input
                    name="Cep"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="00000-000"
                    value={values.Cep}
                    onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                    Digite o cep desejado para realizar a busca de disponibilidade
                </small>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-success">Verificar</button>
              </Modal.Footer>
              </form>
            </Modal>
        </>
    )
}