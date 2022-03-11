import react from "react";

export const FooterLayout = () => {
    return(
        <>
        <footer className="iq-footer">
            <div
            style={{ backgroundImage: "url(images/bg/bg-13.jpg)" }}
            >
            <div className="container">
                <div className="footerRow">
                <div className="col-lg-3 col-md-6 col-sm-12 iq-mtb-60">
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
                <div className="col-lg-2 col-md-6 col-sm-12 iq-mtb-60 footer-menu">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU">Para você</h5>
                    <ul className="iq-pl-0">
                        <li>
                            <a href="# ">- Planos</a>
                        </li>
                        <li>
                            <a href="# ">About Us</a>
                        </li>
                        <li>
                            <a href="# ">Services</a>
                        </li>
                        <li>
                            <a href="# ">Faqs</a>
                        </li>
                        <li>
                            <a href="# ">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 iq-mtb-60 footer-menu">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU">Institucional</h5>
                    <ul className="iq-pl-0">
                        <li>
                            <a href="# ">- Planos</a>
                        </li>
                        <li>
                            <a href="# ">About Us</a>
                        </li>
                        <li>
                            <a href="# ">Services</a>
                        </li>
                        <li>
                            <a href="# ">Faqs</a>
                        </li>
                        <li>
                            <a href="# ">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 iq-contact iq-mtb-60">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU">
                    Fale Conosco
                    </h5>
                    <div className="iq-mb-30">
                    <div className="blog">
                        <i className="ion-ios-telephone-outline" />
                        <div className="content ">
                        <div className="iq-tw-6 title ">Phone</div> +0123 456 789
                        </div>
                    </div>
                    </div>
                    <div className="iq-mb-30">
                    <div className="blog ">
                        <i className="ion-ios-email-outline" />
                        <div className="content ">
                        <div className="iq-tw-6 title ">Mail</div> mail@coinex.com
                        </div>
                    </div>
                    </div>
                    <div className="blog">
                    <i className="ion-ios-location-outline" />
                    <div className="content ">
                        <div className="iq-tw-6 title ">Address</div> 1234 North Luke
                        Lane, South Bend,IN 360001
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 iq-contact iq-mtb-60">
                    <h5 className="small-title iq-tw-5 iq-font-white footerForU">
                    Endereço
                    </h5>
                    <div className="iq-mb-30">
                    <div className="blog">
                        <i className="ion-ios-telephone-outline" />
                        <div className="content ">
                        <div className="iq-tw-6 title ">Phone</div> +0123 456 789
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
                            <a href="# ">
                            <i className="fa fa-twitter " />
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                            <i className="fa fa-facebook " />
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                            <i className="fa fa-google " />
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                            <i className="fa fa-github " />
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