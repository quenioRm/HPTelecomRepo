import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChangeContentOneEffect } from "./ChangeContentOneEffect";

export const HomeMainOverView = () => {

    const { 
        handleMouseEnter,
        handleMouseLeave,
        updateSelectCenterImage,
        handleInitialCenterContent,
        icons,
        centerImageOpacity,
        selectCenterImageContent,
        selectCenterImage,
        greenLink

    } = ChangeContentOneEffect()
    
    useEffect(() => {
        handleInitialCenterContent()
    }, [])

    return(
    <section className="overview-block-ptb iq-feature-aria grey-bg overviewHe">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="heading-title">
                <h3 className="title iq-tw-5 iq-mb-25">Por que escolher a <span style={{color:"#008C1E"}}>Hayp</span></h3>
                <p>
                    Contrate a ultravelocidade da fibra óptica para explorar ao máximo a navegação na internet.
                </p>
                </div>
            </div>
            </div>
            <div className="row h-100 overviewChangePos">
            <div className="col-lg-4 col-md-12 text-right" style={{
                zIndex:1
            }}>
                <div className="iq-feature2 iq-mtb-22 first-l" 
                style={{
                    position:"relative",
                    left:"45px",
                    top:"85px"
                }}
                >
                    <h4 className={localStorage.getItem("iconId") == 1 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <Link 
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                        to="/">Alta velocidade</Link>
                        <span className="iq-icon iq-ml-10">
                        <img 
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 1 ? 
                            "images/hub/icons/1_velocidade_on.png" 
                            : icons[1]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p>
                        <a href="#" className={greenLink}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                        >
                            Temos disponível planos de altíssima performance e com velocidades reais. 
                            Baixe conteúdos no limite máximo de sua velocidade sem se preocupar.
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 second-l"
                style={{
                    position:"relative",
                    left:"-5px",
                    top:"50px"
                }}
                >
                    <h4 className={localStorage.getItem("iconId") == 2 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <Link 
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                        to="/">Sem fidelidade</Link>
                        <span className="iq-icon iq-ml-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 2 ? 
                            "images/hub/icons/2_Sem difelidade_on.png" 
                            : icons[2]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p>
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                        >
                        Quem não tem qualidade, coloca fidelidade! E aqui na HP fidelizamos os 
                        clientes através de nossos serviços e não através de um contrato.
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-l"
                    style={{
                        position:"relative",
                        left:"30px",
                        top:"20px"
                    }}
                >
                    <h4 className={localStorage.getItem("iconId") == 3 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <Link 
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={() => handleMouseLeave(3)}
                        to="/">Técnicos locais</Link>
                        <span className="iq-icon iq-ml-10"
                        >
                        <img
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 3 ? 
                            "images/hub/icons/3_suporte_on.png" 
                            : icons[3]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p>
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={() => handleMouseLeave(3)}
                        >
                        Para oferecer um suporte técnico rápido, temos uma equipe local em seu bairro para atender os chamados.
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-l"
                    style={{
                        position:"relative",
                        left: "-15px"
                    }}
                >
                    <h4 className={localStorage.getItem("iconId") == 4 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <Link 
                            style={{
                                position:"relative",
                                left: "-95px"
                            }}
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}
                        to="/">Grande interatividade</Link>
                        <span className="iq-icon iq-ml-10">
                        <img
                            style={{position:"relative" , top:"-55px"}}
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 4 ? 
                            "images/hub/icons/4_Chat_on.png" 
                            : icons[4]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p
                    style={{position:"relative" , top:"-60px"}}
                    >
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(4)}
                        onMouseLeave={() => handleMouseLeave(4)}
                        >
                        Nossa equipe esta pronta para tirar todas dúvidas e sanar as dificuldades de nossos clientes,
                        oferecendo um atendimento personalizado e humanizado.
                        </a>
                    </p>
                </div>
            </div>
            <div id="centerImage" className="col-lg-4 col-md-12 align-self-center text-center">
                <img src={selectCenterImage} alt="" 
                    style={{
                        position:"relative",
                        left:"-80px",
                        top:"-100px"
                    }}
                />
                <div className="overlay"
                style={{
                    opacity: centerImageOpacity
                }}
                >
                <img src={selectCenterImageContent} alt=""
                    style={{
                        position:"relative",
                        top:"-100px"
                    }}
                />
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="iq-feature2 iq-mtb-20 first-r"
                style={{
                    position:"relative",
                    top:"60px",
                    left:"-65px"
                }}
                >
                    <h4 className={localStorage.getItem("iconId") == 5 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 5 ? 
                            "images/hub/icons/5_Ping_on.png" 
                            : icons[5]}
                            alt=""
                        />
                        </span>
                        <Link 
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                        to="/">Ping e latência</Link>
                    </h4>
                    <p>
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(5)}
                        onMouseLeave={() => handleMouseLeave(5)}
                        >
                        Jogue online, acesse sites, VPNs e servidores em tempo real com o melhor tempo de resposta.
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 second-r"
                    style={{
                        position:"relative",
                        left:"-10px",
                        top:"20px"
                    }}
                >
                    <h4 className={localStorage.getItem("iconId") == 6 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(6)}
                            onMouseLeave={() => handleMouseLeave(6)}
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 6 ? 
                            "images/hub/icons/6_Home Office_on.png" 
                            : icons[6]}
                            alt=""
                        />
                        </span>
                        <Link 
                            onMouseEnter={() => handleMouseEnter(6)}
                            onMouseLeave={() => handleMouseLeave(6)}
                            to="/">Home office</Link>
                    </h4>
                    <p>
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(6)}
                        onMouseLeave={() => handleMouseLeave(6)}
                        >
                        Temos um feedback único para quem trabalha de casa. Além de especialistas para ajudar na estabilidade da sua conexão.
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-r"
                    style={{
                        position:"relative",
                        top:"-5px",
                        left:"-65px"
                    }}              
                >
                    <h4 className={localStorage.getItem("iconId") == 7 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(7)}
                            onMouseLeave={() => handleMouseLeave(7)}  
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 7 ? 
                            "images/hub/icons/7_UDH_on.png" 
                            : icons[7]}
                            alt=""
                        />
                        </span>
                        <Link style={{position:"relative", left:"80px", top:"-80px"}}
                            onMouseEnter={() => handleMouseEnter(7)}
                            onMouseLeave={() => handleMouseLeave(7)}
                            to="/">                        
                            <p>
                                Assista online 
                            </p>
                            <p style={{position:"relative", top:"-20px"}}>
                                em UHD
                            </p>
                        </Link>
                    </h4>
                    <p
                    style={{position:"relative", top:"-105px"}}
                    >
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(7)}
                        onMouseLeave={() => handleMouseLeave(7)}     
                        >
                        A experiência única do 8K exige uma internet ultra veloz e uma consistência que poucos podem oferecer.
                        Maratone sem medo e desfrute da qualidade máxima de seu dispositivo.
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-r"
                    style={{
                        position:"relative",
                        left:"-34px",
                        top:"-135px"
                    }}              
                >
                    <h4 className={localStorage.getItem("iconId") == 8 ? "iq-font-black iq-tw-5 aHover" 
                    : "iq-font-black iq-tw-5"}>
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(8)}
                            onMouseLeave={() => handleMouseLeave(8)} 
                            className="img-fluid"
                            src={localStorage.getItem("iconId") == 8 ? 
                            "images/hub/icons/8_Clube_on.png" 
                            : icons[8]}
                            alt=""
                        />
                        </span>
                        <Link 
                            onMouseEnter={() => handleMouseEnter(8)}
                            onMouseLeave={() => handleMouseLeave(8)}
                            to="/">                        
                           <p
                                style={{
                                    position:"relative",
                                    left:"80px",
                                    top:"-85px"
                                }}
                            >
                                Clube
                            </p>
                            <p
                                style={{
                                    position:"relative",
                                    left:"80px",
                                    top:"-105px"
                                }}
                            >
                                de descontos
                            </p>
                        </Link>
                    </h4>
                    <p
                        style={{
                            position:"relative",
                            left:"74px",
                            top:"-115px"
                        }}       
                    >
                        <a href="#" className="iq-font-green"
                        onMouseEnter={() => handleMouseEnter(8)}
                        onMouseLeave={() => handleMouseLeave(8)} 
                        >
                        Clientes da Hayp ganham descontos exclusivos em vários estabelecimentos. 
                        Cinema, farmácia, petshop e muitos outros.
                        </a>
                    </p>
                </div>
            </div>
            <div className="particles text-center">
                <img className="img-fluid" src="images/particles.png" alt="" />
            </div>
            </div>
        </div>
    </section>
    )
}