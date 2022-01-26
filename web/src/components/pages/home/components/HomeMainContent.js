import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChangeContentOneEffect } from "./ChangeContentOneEffect";

export const HomeMainContent = () => {

    

    const { 
        handleMouseEnter,
        handleMouseLeave,
        handleIconOff,
        updateSelectCenterImage,
        iconsList,
        icons,
        centerImageOpacity,
        centerImagesContent,
        selectCenterImageContent,
        selectCenterImage

    } = ChangeContentOneEffect()

   
    return(
        <>
        {/* Parte 1 */}
        <section className="overview-block-ptb iq-feature-aria">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="heading-title">
                <h3 className="title iq-tw-5 iq-mb-25">Por que escolher a <span style={{color:"#008C1E"}}>HP Telecom</span></h3>
                <p>
                    Contrate a ultravelocidade da fibra óptica para explorar ao máximo a navegação na internet.
                </p>
                </div>
            </div>
            </div>
            <div className="row h-100">
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
                    <h4 className="iq-font-black iq-tw-5">
                        <Link to="/">Alta velocidade</Link>
                        <span className="iq-icon iq-ml-10">
                        <img 
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                            className="img-fluid"
                            src={icons[1]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.{" "}
                        <a href="#" className="iq-font-green">
                        [ ... ]
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
                    <h4 className="iq-font-black iq-tw-5">
                        <a href="services-details.html">Sem fidelidade</a>{" "}
                        <span className="iq-icon iq-ml-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                            className="img-fluid"
                            src={icons[2]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.{" "}
                        <a href="#" className="iq-font-green">
                        [ ... ]
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
                    <h4 className="iq-font-black iq-tw-5">
                        <a href="services-details.html">Técnicos locais</a>{" "}
                        <span className="iq-icon iq-ml-10"
                        >
                        <img
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                            className="img-fluid"
                            src={icons[3]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.{" "}
                        <a href="#" className="iq-font-green">
                        [ ... ]
                        </a>
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-l"
                    style={{
                        position:"relative",
                        left: "-15px"
                    }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <a 
                        style={{
                            position:"relative",
                            left: "-95px"
                        }}
                        href="/">Grande interatividade</a>{" "}
                        <span className="iq-icon iq-ml-10">
                        <img
                            style={{position:"relative" , top:"-55px"}}
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}
                            className="img-fluid"
                            src={icons[4]}
                            alt=""
                        />
                        </span>
                    </h4>
                    <p
                    style={{position:"relative" , top:"-60px"}}
                    >
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.{" "}
                        <a href="#" className="iq-font-green">
                        [ ... ]
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
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                            className="img-fluid"
                            src={icons[5]}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">Ping e latência</a>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.{" "}
                        <a href="#" className="iq-font-green">
                        [ ... ]
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
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(6)}
                            onMouseLeave={() => handleMouseLeave(6)}
                            className="img-fluid"
                            src={icons[6]}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">Home office</a>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-r"
                    style={{
                        position:"relative",
                        top:"-5px",
                        left:"-65px"
                    }}              
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(7)}
                            onMouseLeave={() => handleMouseLeave(7)}  
                            className="img-fluid"
                            src={icons[7]}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html"
                            style={{position:"relative", left:"80px", top:"-80px"}}
                        >
                            <p>
                                Assista online 
                            </p>
                            <p style={{position:"relative", top:"-20px"}}>
                                em UHD
                            </p>
                        </a>
                    </h4>
                    <p
                    style={{position:"relative", top:"-105px"}}
                    >
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-r"
                    style={{
                        position:"relative",
                        left:"-34px",
                        top:"-135px"
                    }}              
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            onMouseEnter={() => handleMouseEnter(8)}
                            onMouseLeave={() => handleMouseLeave(8)} 
                            className="img-fluid"
                            src={icons[8]}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">
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
                        </a>
                    </h4>
                    <p
                        style={{
                            position:"relative",
                            left:"74px",
                            top:"-115px"
                        }}       
                    >
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.
                    </p>
                </div>
            </div>
            <div className="particles text-center">
                <img className="img-fluid" src="images/particles.png" alt="" />
            </div>
            </div>
        </div>
        </section>
        {/* Parte 2 */}
          {/* Testimonial */}
  <div
    className="iq-news overview-block-ptb iq-bg iq-over-black-80 jarallax"
    style={{
      backgroundImage: 'url("images/bg/bg-7.jpg")',
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 text-center">
          <img src="images/speack.png" alt="#" />
          <div className="iq-testimonial text-center">
            <div
              id="testimonial-slider"
              className="owl-carousel owl-theme owl-loaded"
              data-autoplay="true"
              data-loop="true"
              data-nav="false"
              data-dots="true"
              data-items={1}
              data-items-laptop={1}
              data-items-tab={1}
              data-items-mobile={1}
              data-items-mobile-sm={1}
              data-margin={30}
            >
              <div className="testimonial iq-font-white">
                <p className="description">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s.
                </p>
                <h5 className="iq-tw-6 iq-font-yellow">Rinks Cooper</h5>
                <span>
                    CEO, CoinEx
                    <img width={90} style={{maxWidth:"20%", position:"relative", left:"340px"}} src="images\another\estrelas-8.png"/>
                </span>
              </div>
              <div className="testimonial iq-font-white">
                <p className="description">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s.
                </p>
                <h5 className="iq-tw-6 iq-font-yellow">JD Scot</h5>
                <span>
                    CEO, CoinEx
                    <img width={90} style={{maxWidth:"20%", position:"relative", left:"340px"}} src="images\another\estrelas-8.png"/>
                </span>
              </div>
              <div className="testimonial iq-font-white">
                <p className="description">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s.
                </p>
                <h5 className="iq-tw-6 iq-font-yellow">Haris Morgan</h5>
                <span>
                    CEO, CoinEx
                    <img width={90} style={{maxWidth:"20%", position:"relative", left:"340px"}} src="images\another\estrelas-8.png"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial */}
        {/* parte 3 */}
        <section className="overview-block-ptb">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="heading-title">
                <h3 className="title iq-tw-5 iq-mb-20">Bitcoin Pricing</h3>
                <p>
                    Here is 3 Easy Steps to Busy &amp; Sell Bitcoin. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                </p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-pricing">
                <span className="icon">
                    <img
                    src="images\another\plano1-8.png"
                    width={80}
                    style={{
                        position:"relative",
                        top:"-8px"
                    }}
                    >
                    </img>
                </span>
                <div className="pricing-header">
                    <h3 className="title">Standard</h3>
                    <span className="price-value">$09</span>
                </div>
                <ul className="pricing-content">
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Photoshop
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    HTML5 &amp; CSS 5
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-close-round" />
                    Wordpress
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-close-round" />
                    Javascript
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-close-round" />
                    Animation
                    </li>
                </ul>
                <a className="button" href="#">
                    Choose Package
                </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-pricing">
                <span className="icon">
                    <img
                    src="images\another\plano2-8.png"
                    width={80}
                    style={{
                        position:"relative",
                        top:"-8px"
                    }}
                    >
                    </img>
                </span>
                <div className="pricing-header">
                    <h3 className="title">Medium</h3>
                    <span className="price-value">$29</span>
                </div>
                <ul className="pricing-content">
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Photoshop
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    HTML5 &amp; CSS 5
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Wordpress
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-close-round" />
                    Javascript
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-close-round" />
                    Animation
                    </li>
                </ul>
                <a className="button" href="#">
                    Choose Package
                </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-pricing">
                <span className="icon">
                <img
                    src="images\another\plano3-8.png"
                    width={80}
                    style={{
                        position:"relative",
                        top:"-8px"
                    }}
                    >
                </img>
                </span>
                <div className="pricing-header">
                    <h3 className="title">Premium</h3>
                    <span className="price-value">$59</span>
                </div>
                <ul className="pricing-content">
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Photoshop
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    HTML5 &amp; CSS 5
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Wordpress
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Javascript
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-close-round" />
                    Animation
                    </li>
                </ul>
                <a className="button" href="#">
                    Choose Package
                </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-pricing">
                <span className="icon">
                <img
                    src="images\another\plano4-8.png"
                    width={80}
                    style={{
                        position:"relative",
                        top:"-8px"
                    }}
                    >
                </img>
                </span>
                <div className="pricing-header">
                    <h3 className="title">Ultimate</h3>
                    <span className="price-value">$99</span>
                </div>
                <ul className="pricing-content">
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Photoshop
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    HTML5 &amp; CSS 5
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Wordpress
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Javascript
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Animation
                    </li>
                </ul>
                <a className="button" href="#">
                    Choose Package
                </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-pricing">
                <span className="icon">
                <img
                    src="images\another\plano5-8.png"
                    width={80}
                    style={{
                        position:"relative",
                        top:"-8px"
                    }}
                    >
                </img>
                </span>
                <div className="pricing-header">
                    <h3 className="title">Ultimate</h3>
                    <span className="price-value">$99</span>
                </div>
                <ul className="pricing-content">
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Photoshop
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    HTML5 &amp; CSS 5
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Wordpress
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Javascript
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Animation
                    </li>
                </ul>
                <a className="button" href="#">
                    Choose Package
                </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-pricing">
                <span className="icon">
                <img
                    src="images\another\plano6-8.png"
                    width={80}
                    style={{
                        position:"relative",
                        top:"-8px"
                    }}
                    >
                </img>
                </span>
                <div className="pricing-header">
                    <h3 className="title">Ultimate</h3>
                    <span className="price-value">$99</span>
                </div>
                <ul className="pricing-content">
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Photoshop
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    HTML5 &amp; CSS 5
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Wordpress
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Javascript
                    </li>
                    <li>
                    <i aria-hidden="true" className="iq-mr-10 ion-checkmark-round" />
                    Animation
                    </li>
                </ul>
                <a className="button" href="#">
                    Choose Package
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}