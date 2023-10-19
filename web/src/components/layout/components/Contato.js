import { useState } from "react";
import "../components/contato.css"
import { HomeCepCheck } from "../../pages/home/components/HomeCepCheck";


export default function Contato() {

    const [showCep, setShowCep] = useState(false);

    const toggleSignin = () => {
        setShowCep(!showCep);
    }
    return(
        <ul className="lista-de-contato" style={{
            width:"auto",
            padding:"0 0 20px 20px"
        }}>
    
            <div>
                <h3 className="tiitle-contato-top">Quero ser cliente:</h3>
            </div>
    
            <li style={{ display: "flex", gap: "10px" }}> <img src="images/cont-tel.svg" style={{ width: "60px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="tel:1128762641" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Atendimento por telefone</a></li>
    
            <li style={{ display: "flex",  gap: "10px" }}> <img src="images/cont-whatsapp.svg" style={{ width: "70px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="https://wa.me/551128762641" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Atendimento por WhatsApp</a></li>
    
            <li style={{ display: "flex",  gap: "10px" }}><img src="images/cont-cep.svg" style={{ width: "35px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                
                <a onClick={toggleSignin} style={{ fontSize: "14px", padding: "20px", borderRadius: "10px", cursor:"pointer" }}>Consulte o seu CEP</a></li>
                <HomeCepCheck 
                      isOpen={showCep}
                      toggle={toggleSignin}
                  />
    
            <li style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center", gap: "10px" }}>
    
                <img src="images/cont-email.svg" style={{ width: "40px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="mailto:contato@hptelecom.com.br" target="_blanck" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Mande um E-mail</a>
    
            </li>

            <div>
                <h3 className="tiitle-contato-top">Já sou cliente:</h3>
            </div>

            <li hidden style={{ display: "flex", gap: "10px" }}> <img src="images/cont-tel.svg" style={{ width: "60px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="tel:1128762641" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Atendimento por telefone</a></li>
    
            <li style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center", gap: "10px" }}>
    
                <img src="images/cont-perfil.svg" style={{ width: "35px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a target="_blank" href="https://cda.hptelecom.com.br/central_assinante_web/" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Área do cliente</a>
    
            </li>
    
        </ul>

        
    )
}