import react from "react";
import { Link } from "react-router-dom";

export const FooterLayout = () => {
    return(
        <>
        <footer className="iq-footer">
            <div
            style={{ backgroundImage: "url(images/bg/bg-13.jpg)" }}
            >
            <div className="container">
                <div className="footerRow">
                <div className="col-lg-2 col-md-6 col-sm-12 iq-mtb-60">
                    <div className="logo">
                    <img
                        id="logo_img_2"
                        className="img-fluid"
                        src="images/logotipo-primario-rgb-01.png"
                        alt="#"
                        style={{
                            position:"relative",
                            top:"-50px",
                            left:"-35px"
                        }}
                    />
                    {/* <div className="iq-font-white iq-mt-15 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                    </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 iq-mtb-60 footer-menu">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU footerHeader">Para você</h5>
                    <ul className="iq-pl-0">
                        <li>
                            <a href="# ">- Planos</a>
                        </li>
                        <li>
                            <a href="# ">- Área do cliente</a>
                        </li>
                        <li>
                            <a href="# ">- Perguntas frequentes</a>
                        </li>
                        <li>
                            <a href="# ">- 2º Via da conta</a>
                        </li>
                    </ul>
                </div>
                <div style={{position:"relative", left:"-60px"}} className="col-lg-3 col-md-6 col-sm-12 iq-mtb-60 footer-menu">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU footerHeader">Institucional</h5>
                    <ul className="iq-pl-0">
                        <li>
                            <a href="# ">- Trabalhe conosco</a>
                        </li>
                        <li>
                            <a href="# ">- Contrato</a>
                        </li>
                        <li>
                            <a href="# ">- Privacidade</a>
                        </li>
                        <li>
                            <a href="# ">- Quem somos</a>
                        </li>
                    </ul>
                </div>
                <div style={{position:"relative", left:"-80px"}} className="col-lg-3 col-md-6 col-sm-12 iq-contact iq-mtb-60">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU footerHeader">
                    Fale Conosco
                    </h5>
                    <div className="iq-mb-30">
                    <div className="blog">
                        <i>
                            <img src="/images/footer/telefone-8.png" style={{width:"100%"}}></img>
                        </i>
                        <div className="content ">
                        <div className="iq-tw-6 title ">Telefone</div> 11 2876-2641
                        </div>
                    </div>
                    </div>
                    <div className="iq-mb-30">
                        <div className="blog ">
                            <i>
                                <img src="/images/footer/whatsapp-8.png" style={{width:"100%"}}></img>
                            </i>
                            <div className="content ">
                            <div className="iq-tw-6 title">WhatsApp</div> <Link className="forceUpdateColor" to="www.google.com">11 2876-2641</Link>
                            </div>
                        </div>
                    </div>
                        <div className="blog">
                            <i>
                                <img src="/images/footer/email-8.png" style={{width:"100%"}}></img>
                            </i>
                            <div className="content ">
                                <div className="iq-tw-6 title ">Email</div> contato@hptelecom.com.br
                            </div>
                    </div>
                </div>
                <div style={{position:"relative", left:"-90px"}} className="col-lg-4 col-md-6 col-sm-12 iq-contact iq-mtb-60">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU footerHeader">
                    Endereço
                    </h5>
                    <div className="iq-mb-30">
                    <div className="blog">
                        <i>
                        <img src="/images/footer/localiza-8.png" style={{width:"100%"}}></img>
                        </i>
                        <div className="content ">
                            <p>
                                <div className="iq-tw-6 title" style={{fontWeight:"normal"}}></div> Av. Manuel Alves Soares, 638 - sala 3, Parque Colonial - Cep: 04821-270
                            </p>
                            <p>
                                <div className="iq-tw-6 title "></div> CNPJ - 28.973.552/0001-03
                            </p>
                            <p>
                                <div className="iq-tw-6 title "></div> Empresa autorizada pela <span style={{ color: "rgb(0, 140, 30)" }}>Anatel, ato 1018</span>
                            </p>
                        </div>  
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-bottom iq-ptb-20 ">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="iq-copyright iq-mt-10 iq-font-white">
                        Copyright <span id="copyright"> </span>{" "}
                        <a href="#">HP Telecom</a> Todos os direitos reservados{" "}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <ul className="iq-media-blog ">
                        <li>
                            <a style={{border:"transparent"}} href="# ">
                                <i style={{position: "relative", top:"-4px"}} >
                                    <img src="/images/footer/twitter-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a style={{border:"transparent"}} href="# ">
                                <i style={{position: "relative", top:"-4px"}}>
                                    <img src="/images/footer/facebok-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a style={{border:"transparent"}} href="# ">
                                <i style={{position: "relative", top:"-4px"}}>
                                    <img src="/images/footer/instagram-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a style={{border:"transparent"}} href="# ">
                                <i style={{position: "relative", top:"-4px"}}>
                                    <img src="/images/footer/linkedin-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*=================================
        Footer */}
        </>
    )
}