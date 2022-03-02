import React,{useEffect, useState} from "react";
import ApiGoogle from "../../../../services/ApiGoogle";
import OwlCarousel from 'react-owl-carousel';  

export const HomeComents = () => {

    const [reviews, setReviews] = useState([]);

    function updateComents(){

        const el = document.querySelector('.owl-nav');
        if(el){
            el.remove()
        }

        var elements = document.getElementsByClassName('button owl-dot');

        reviews.map((item, key) => {
            var span = elements[key].getElementsByTagName('span')
            span[0].setAttribute('style','background : url("'+ item.profile_photo_url +'")')
        }) 
    }

    useEffect(async () => {
        await ApiGoogle.get("/json?key=AIzaSyA4DJHYNhaxuLr-5yeGf5LTM9xD2kWJhqY&placeid=ChIJUTT-FhpPzpQRHXCBRIkB6yw")
            .then((response) => {
                setReviews(response.data.result.reviews);
            }).catch((err) =>{
        })
        updateComents()
    }, []);
    
    useEffect(() => {
       updateComents()
    },[reviews])


    return(
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
                            <div>            
                                {reviews.length > 0 ? 
                                    <OwlCarousel 
                                        className="owl-carousel owl-theme owl-loaded"
                                        items={1}  
                                        autoplay={true}
                                        dots={true}
                                        nav={true}
                                        loop={true}
                                        margin={30}
                                        dotClass="button owl-dot"
                                        >  
                                            {reviews.map((data, key) =>(
                                                <div key={key} className="testimonial iq-font-white">
                                                    <p className="description">
                                                        {data.text}
                                                    </p>
                                                    <h5 className="iq-tw-6 iq-font-yellow">{data.author_name}</h5>
                                                    <span>
                                                        <img width={90} style={{maxWidth:"20%", position:"relative", left:"340px"}} src="images\another\estrelas-8.png"/>
                                                    </span>
                                                    {/* <span 
                                                    className="span-coment-plp"
                                                    style={{
                                                         position:"relative", left:"380px", top:'15px',
                                                         backgroundImage:'url("'+ data.profile_photo_url +'")'
                                                    }}
                                                    /> */}
                                                </div>
                                            ))}
                                    </OwlCarousel>  
                                :
                                <></>}
                            </div>  
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}