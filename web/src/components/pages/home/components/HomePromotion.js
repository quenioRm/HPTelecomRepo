import React,{useState, useEffect} from "react";
import { PromoService } from "./services/PromoService";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const HomePromotion = () => {

    const [show, setShow] = useState(false);

    const {
        promos,
        handlePromos
    } = PromoService()

    useEffect(() => {
        handlePromos()
    },[])

    useEffect(() => {
        if(typeof(promos.status) !== "undefined"){
            setShow(false)
        }else{
            setShow(true)
        }
    }, [promos])

    return(
        <>  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
          </Modal.Header>
          <Modal.Body>
            <img style={{width:"470px"}}
            src={promos.imageUrl} />
          </Modal.Body>
        </Modal>
      </>
    )
}