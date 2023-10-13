import react, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const HeaderLayout = () => {

    const location = useLocation()

    const [logo, setLog] = useState("images/logotipo-descritivo-rgb-03.png")
    const [y, setY] = useState(0);
    const [logoClass, setLogoClass] = useState({
        height: "240px",
        position: "relative",
        top: "-100px",
        left: "-48px"
    });

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y < window.scrollY) {
            if (window.scrollY <= 20) {
                setLogoClass({
                    height: "240px",
                    position: "relative",
                    top: "-100px",
                    left: "-48px"
                });
                setLog("images/logotipo-descritivo-rgb-03.png")
            } else {
                setLogoClass({
                    height: "70px",
                    position: "relative",
                    top: "-10px",
                    left: ""
                });
                setLog("images/logotipo-primario-rgb-01.png")
            }
        }
        setY(y);
    };

    useEffect(() => {
        setY(window.scrollY);

        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, []);


    function scrollWin() {
        window.scrollTo(0, 500);
    }

    function ScrollToFooter() {
        const divRef = useRef(null);

        useEffect(() => {
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        });
    }

    return (
        <>
            {/* Header */}
            <header className="transparent">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="topbar-left">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        <i className="fa fa-phone text-blue" /> +0123 456 789
                        </li>
                        <li className="list-inline-item">
                        <i className="fa fa-envelope-o"> </i> support@coinex.com
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="topbar-right text-right">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        <ul className="list-inline iq-left">
                            <li className="list-inline-item">
                            <a
                                href="#"
                                data-toggle="modal"
                                data-target=".iq-login"
                                data-whatever="@mdo"
                            >
                                <i className="fa fa-lock" />
                                Login
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a
                                href="#"
                                data-toggle="modal"
                                data-target=".iq-register"
                                data-whatever="@fat"
                            >
                                <i className="fa fa-user" />
                                Register
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="list-inline-item">
                        <a href="#">
                            <i className="fa fa-comments-o" />
                            Free Consulting
                        </a>
                        </li>
                    </ul>
                    </div>
                </div> */}
                        </div>
                    </div>
                </div>
                <div className="iq-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="logo">
                                    <a href="/">
                                        <img
                                            id="logo_img"
                                            className="img-fluid"
                                            src={logo}
                                            alt="Logo da Hayp Telecom"
                                            style={{
                                                height: logoClass.height,
                                                position: logoClass.position,
                                                top: logoClass.top,
                                                left: logoClass.left
                                            }}
                                        />
                                    </a>
                                </div>
                                <nav>
                                    {" "}
                                    <a
                                        id="resp-menu"
                                        className="responsive-menu"
                                        href="#"
                                    >
                                        <i className="fa fa-reorder" /> Menu
                                    </a>
                                    <ul className="menu text-right">
                                        <li>
                                            <a className={location.pathname == "/"
                                                ? 'active' : ''} href="/">
                                                HOME
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/Plans" className={location.pathname == "/Plans"
                                                ? 'active' : ''} >
                                                PLANOS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/About" className={location.pathname == "/About"
                                                ? 'active' : ''}>
                                                QUEM SOMOS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" id="down" href="#down">
                                                CONTATO
                                            </Link>
                                            {<ul className="nav-item dropdown">
                                                <li><a href="#">Atendimento por telefone</a></li>
                                                <li><a href="#">Contato</a></li>
                                                <li><a href="#">Contato</a></li>
                                                <li><a href="#">Contato</a></li>
                                                <li><a href="#">Contato</a></li>
                                                <li><a href="#">Contato</a></li>

                                            </ul>}
                                        </li>

                                        <li>
                                            <a className="" target="_blank" href="https://cda.hptelecom.com.br/central_assinante_web/">
                                                ÁREA DO CLIENTE
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}
        </>
    )
}