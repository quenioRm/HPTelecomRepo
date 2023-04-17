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
                            <a href="/Plans">- Planos</a>
                        </li>
                        <li>
                            <a href="https://cda.hptelecom.com.br/central_assinante_web/" target="_blank">- Área do cliente</a>
                        </li>
                        {<li hidden>
                            <a href="# ">- Perguntas frequentes</a>
                        </li>}
                        <li hidden>
                            <a href="# ">- 2º Via da conta</a>
                        </li>
                    </ul>
                </div>
                <div style={{position:"relative", left:"-60px"}} className="col-lg-3 col-md-6 col-sm-12 iq-mtb-60 footer-menu">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU footerHeader">Institucional</h5>
                    <ul className="iq-pl-0">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/company/hayp-telecom">- Trabalhe conosco</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/13RW5zmQRpBEoEcxki59-x5B_Z4Ko11bN/view?usp=sharing" target="_blank">- Contrato</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://docs.google.com/document/d/1_QgSaMT8rjzekjxaD79MfTVg1jPqVntg6f3alN9Jozc/edit?usp=sharing">- Privacidade</a>
                        </li>
                        <li>
                            <a href="/About">- Quem somos</a>
                        </li>
                    </ul>
                </div>
                <div style={{position:"relative", left:"-80px"}} className="col-lg-3 col-md-6 col-sm-12 iq-contact iq-mtb-60">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU footerHeader">
                    <a href="mailto:contato@hptelecom.com.br" target="_blank">Fale conosco</a>
                    </h5>
                    <div className="iq-mb-30">
                    <div className="blog">
                        <i>
                            <img src="/images/footer/telefone-8.png" style={{width:"100%"}}></img>
                        </i>
                        <div className="content ">
                        <div className="iq-tw-6 title ">Telefone</div> <a href="tel:+55112876264" target="_blank" className="forceUpdateColor">11 2876-2641</a>
                        </div>
                    </div>
                    </div>
                    <div className="iq-mb-30">
                        <div className="blog ">
                            <i>
                                <img src="/images/footer/whatsapp-8.png" style={{width:"100%"}}></img>
                            </i>
                            <div className="content ">
                            <div className="iq-tw-6 title">WhatsApp</div> 
                            <a target="_blank" className="forceUpdateColor" href="https://api.whatsapp.com/send?phone=551128762641">11 2876-2641</a>
                            </div>
                        </div>
                    </div>
                        <div className="blog">
                            <i>
                                <img src="/images/footer/email-8.png" style={{width:"100%"}}></img>
                            </i>
                            <div className="content ">
                                <div className="iq-tw-6 title ">Email</div> <a href="mailto:contato@hptelecom.com.br" target="_blank" className="forceUpdateColor">contato@hptelecom.com.br</a>
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
                                <div className="iq-tw-6 title" style={{fontWeight:"normal"}}></div> <a className="forceUpdateColor" target="_blank" href="https://www.google.com.br/maps/dir//HP+Telecom+-+Av.+Manuel+Alves+Soares,+638+-+Sala+3+-+Parque+Colonial,+S%C3%A3o+Paulo+-+SP,+04821-270/@-23.726327,-46.6883989,17z/data=!4m16!1m6!3m5!1s0x94ce4f1a16fe3451:0x2ceb01894481701d!2sHP+Telecom!8m2!3d-23.7263319!4d-46.6862102!4m8!1m0!1m5!1m1!1s0x94ce4f1a16fe3451:0x2ceb01894481701d!2m2!1d-46.6862102!2d-23.7263319!3e2">Av. Manuel Alves Soares, 638 - sala 3, Parque Colonial - Cep: 04821-270</a>
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
                        Todos os direitos reservados <span id="copyright"> </span>{" "}
                        <a href="/About"><strong>Hayp Telecom LTDA</strong></a> {" "}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <ul className="iq-media-blog ">
                        {/* <li>
                            <a style={{border:"transparent"}} href="# ">
                                <i style={{position: "relative", top:"-4px"}} >
                                    <img src="/images/footer/twitter-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li> */}
                        <li>
                            <a style={{border:"transparent"}} target="_blank" href="https://www.facebook.com/HaypTelecom">
                                <i style={{position: "relative", top:"-4px"}}>
                                    <img src="/images/footer/facebok-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a style={{border:"transparent"}} target="_blank" href="https://www.instagram.com/haypoficial/">
                                <i style={{position: "relative", top:"-4px"}}>
                                    <img src="/images/footer/instagram-8.png" style={{width:"100%"}}></img>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a style={{border:"transparent"}} target="_blank" href="https://www.linkedin.com/company/hayp-telecom">
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