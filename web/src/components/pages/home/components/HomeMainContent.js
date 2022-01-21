import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChangeContentOneEffect } from "./ChangeContentOneEffect";

export const HomeMainContent = () => {

    const [images, setImages] = useState(
        {
            icon1: "images/hub/icons/1_velocidade_off.png",
            icon2: "images/hub/icons/2_Sem difelidade_off.png",
            icon3: "images/hub/icons/3_suporte_off.png",
            icon4: "images/hub/icons/4_Chat_off.png",
            icon5: "images/hub/icons/5_Ping_off.png",
            icon6: "images/hub/icons/6_Home Office_off.png",
            icon7: "images/hub/icons/7_UDH_off.png",
            icon8: "images/hub/icons/8_Clube_off.png",
        }
    )

    const [selectCenterImage, setSelectCenterImage] = useState("images/hub/hub1-8.png");
    
    const [centerImages, setcenterImages] = useState(
        [
            {id : 1, image: "images/hub/hub1-8.png"},
            {id : 2, image: "images/hub/hub2-8.png"},
            {id : 3, image: "images/hub/hub3-8.png"},
            {id : 4, image: "images/hub/hub4-8.png"},
            {id : 5, image: "images/hub/hub5-8.png"},
            {id : 6, image: "images/hub/hub6-8.png"},
            {id : 7, image: "images/hub/hub7-8.png"},
            {id : 8, image: "images/hub/hub8-8.png"},
        ]
    )

    const { 
        handleMouseEnter,
        handleMouseLeave,
        icons,
        newicon

    } = ChangeContentOneEffect()

    useEffect(() => {
      updateIcons(newicon.id)
      updateSelectCenterImage(newicon.id)
    }, [newicon])

    const updateIcons = id => {
        Object.keys(images).forEach(function(key) {
            var textKey = "icon" + id;
            if(key == textKey){
                const changedIcon = Object.assign({}, images, { [textKey] : newicon.image })
                setImages(changedIcon)
            }
        });
    }

    const [centerImageClassname , setCenterImageClassName] = useState("col-lg-4 col-md-12 align-self-center text-center")

    const updateSelectCenterImage = id => {
        Object.keys(centerImages).forEach(function(key) {
            if(centerImages[key].id == id){
               setCenterImageClassName("col-lg-4 col-md-12 align-self-center text-center fade-in-image")
               setSelectCenterImage(centerImages[key].image)
               setTimeout(() => {
                    setCenterImageClassName("col-lg-4 col-md-12 align-self-center text-center")
               }, 3500);
            }
        });
    }

    return(
        <>
        {/* Parte 1 */}
        <section className="overview-block-ptb iq-feature-aria">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="heading-title">
                <h3 className="title iq-tw-5 iq-mb-25">Bitcoin Features</h3>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.{" "}
                </p>
                </div>
            </div>
            </div>
            <div className="row h-100">
            <div className="col-lg-4 col-md-12 text-right">
                <div className="iq-feature2 iq-mtb-22 first-l" 
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                style={{
                    position:"relative",
                    left:"45px",
                    top:"65px"
                }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <Link to="/">Alta velocidade</Link>
                        <span className="iq-icon iq-ml-10">
                        <img
                            className="img-fluid"
                            src={images.icon1}
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
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
                style={{
                    position:"relative",
                    left:"-5px",
                    top:"50px"
                }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <a href="services-details.html">Secure and Stable</a>{" "}
                        <span className="iq-icon iq-ml-10">
                        <img
                            className="img-fluid"
                            src={images.icon2}
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
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                    style={{
                        position:"relative",
                        left:"30px",
                        top:"20px"
                    }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <a href="services-details.html">Coin Exchange</a>{" "}
                        <span className="iq-icon iq-ml-10">
                        <img
                            className="img-fluid"
                            src={images.icon3}
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
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                    style={{
                        position:"relative",
                        left: "-10px"
                    }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <a href="services-details.html">Coin Exchange</a>{" "}
                        <span className="iq-icon iq-ml-10">
                        <img
                            className="img-fluid"
                            src={images.icon4}
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
            </div>
            <div id="centerImage" className={centerImageClassname}>
                <img src={selectCenterImage} alt="" 
                style={{
                    position:"relative",
                    left:"-80px"
                }}
                />
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="iq-feature2 iq-mtb-20 first-r"
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
                style={{
                    position:"relative",
                    top:"40px",
                    left:"-70px"
                }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            className="img-fluid"
                            src={images.icon5}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">Mobile Apps</a>
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
                    onMouseEnter={() => handleMouseEnter(6)}
                    onMouseLeave={() => handleMouseLeave(6)}
                    style={{
                        position:"relative",
                        left:"-10px"
                    }}
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            className="img-fluid"
                            src={images.icon6}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">24/7 Trading</a>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-r"
                    onMouseEnter={() => handleMouseEnter(7)}
                    onMouseLeave={() => handleMouseLeave(7)}  
                    style={{
                        position:"relative",
                        top:"-10px",
                        left:"-65px"
                    }}              
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            className="img-fluid"
                            src={images.icon7}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">Free Consulting</a>
                    </h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s.
                    </p>
                </div>
                <div className="iq-feature2 iq-mtb-20 first-r"
                    onMouseEnter={() => handleMouseEnter(8)}
                    onMouseLeave={() => handleMouseLeave(8)} 
                    style={{
                        position:"relative",
                        left:"-30px",
                        top:"-30px"
                    }}              
                >
                    <h4 className="iq-font-black iq-tw-5">
                        <span className="iq-icon iq-mr-10">
                        <img
                            className="img-fluid"
                            src={images.icon8}
                            alt=""
                        />
                        </span>
                        <a href="services-details.html">Free Consulting</a>
                    </h4>
                    <p>
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
                <span>CEO, CoinEx</span>
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
                <span>CEO, CoinEx</span>
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
                <span>CEO, CoinEx</span>
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
                    <i aria-hidden="true" className="ion-social-bitcoin-outline" />
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
                    <i aria-hidden="true" className="ion-social-bitcoin-outline" />
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
                    <i aria-hidden="true" className="ion-social-bitcoin-outline" />
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
                    <i aria-hidden="true" className="ion-social-bitcoin-outline" />
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