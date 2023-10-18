import "../components/contato.css"

export default function Contato() {
    return(
        <ul className="lista-de-contato" style={{
            width:"auto",
            padding:"0 0 20px 20px"
        }}>
    
            <div>
                <h3 className="tiitle-contato-top">Quero teste cliente:</h3>
            </div>
    
            <li style={{ display: "flex", gap: "10px" }}> <img src="images/cont-tel.svg" style={{ width: "80px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="#" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Atendimento por telefone</a></li>
    
            <li style={{ display: "flex",  gap: "10px" }}> <img src="images/cont-whatsapp.svg" style={{ width: "80px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="#" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Atendimento por WhatsApp</a></li>
    
            <li hidden style={{ display: "flex",  gap: "10px" }}><img src="images/cont-cep.svg" style={{ width: "40px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="#" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Consulte o seu CEP</a></li>
    
            <li style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center", gap: "10px" }}>
    
                <img src="images/cont-email.svg" style={{ width: "50px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="#" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Mande um E-mail</a>
    
            </li>

            <div>
                <h3 className="tiitle-contato-top">Já sou cliente:</h3>
            </div>

            <li style={{ display: "flex", gap: "10px" }}> <img src="images/cont-tel.svg" style={{ width: "80px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="#" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Atendimento por telefone</a></li>
    
            <li style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center", gap: "10px" }}>
    
                <img src="images/cont-email.svg" style={{ width: "50px", display: "flex", position: "relative", top: "15px", cursor: "pointer" }} />
                <a href="#" style={{ fontSize: "14px", padding: "20px", borderRadius: "10px" }}>Área do cliente</a>
    
            </li>
    
        </ul>
    )
}