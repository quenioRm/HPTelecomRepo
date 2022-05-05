import React,{useState} from "react";
import { HomeFooterPage } from "./homeFooterPage";
import { HomeCepCheck } from "./homeCepCheck";

export const HomePage = () => {

    const [showCep, setShowCep] = useState(false);

    const toggleSignin = () => {
        setShowCep(!showCep);
    }

    function Call(){
        window.open("tel:1128762641")
    }

    return(
        <>
        <main className="content">
            <div className="container text-center">
                <div className="intro">
                <img
                    src="/assets/images/logo.png?v=1"
                    alt="logo"
                    className="img-fluid"
                />
                <span>Internet para pessoas exigentes</span>
                </div>
                <div className="menu">
                <div className="row">
                    <div className="item col-4">
                    <a href="#" onClick={toggleSignin}>
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_disponibilidade.png?v=1"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span style={{position: "relative",left:"-1.0em"}}>Disponibilidade</span>
                    </a>
                    <HomeCepCheck 
                        isOpen={showCep}
                        toggle={toggleSignin}
                    />
                    </div>
                    <div className="item col-4">
                    <a href="/Coments">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_recommends.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Avaliações</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_nosso-whatsapp.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Atendimento</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a href="/About">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_quem-somos.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Quem somos</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a href="/Plans">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_planos.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Planos</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a href="#" onClick={Call}>
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_contato.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Contato</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a href="/DiscountClub">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/assets_clube-de-desconto.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Clube de descontos</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a target="_blank" href="https://cda.hptelecom.com.br/central_assinante_web/login">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/area-do-cliente-8.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>Área do cliente</span>
                    </a>
                    </div>
                    <div className="item col-4">
                    <a href="/SendMail">
                        <div className="circle">
                        <img
                            src="/assets/images/icons/e-mail-8.png"
                            alt="image"
                            className="img-fluid"
                        />
                        </div>
                        <span>E-Mail</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </main>
        <HomeFooterPage />
        </>
    )
}