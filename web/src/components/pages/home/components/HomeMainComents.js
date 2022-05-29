import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import Api from "../../../../services/Api";

export const HomeMainComents = () => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function Get(){
            if(reviews == null){
                await Api.get("/Web/GetGoogleComents")
                .then((response) => {
                        setReviews(response.data.result.reviews)
                    }).catch((err) =>{
                })
            }
        }
        Get()
    },[])


    return(
    <section className="iq-news overview-block-ptb">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="heading-title">
                <h2 className="title  iq-mb-25">Escolha um dos nossos planos e seja <span style={{color:"#008C1E"}}>HP Telecom</span></h2>
                <p>
                atualizar:  Não sabe qual plano contratar ou ainda tem dúvidas de qual possa atender melhor o que você 
                realmente precisa? <span style={{color:"#008C1E"}}>Fale com nossa equipe de especialistas</span>, vamos te dar um suporte personalizado de acordo 
                com a sua necessidade.
                </p>
                </div>
            </div>
            </div>
            <div className="row iq-team2">
            {reviews ? 
                    <OwlCarousel className='' 
                        loop={true}
                        autoplay={true}
                        margin={10} 
                        nav={false}
                    >
                    {reviews.map((item, key) => (
                    <div
                        className=""
                        style={{ width: 352, marginRight: 30 }}
                        key={key}
                    >
                        <div className="item">
                        <div className="team-blog iq-pall-20 text-center">
                            <img
                            alt=""
                            className="img-fluid text-center"
                            src={item.profile_photo_url}
                            />
                            <div className="iq-font-yellow iq-mt-20">
                            <h5 className="iq-font-dark ">
                                {" "}
                                <a href="#"> {item.author_name}</a>
                            </h5>
                            <small>
                            <img
                                alt=""
                                className="img-fluid text-center"
                                src="\images\another\estrelas-8.png"
                            />
                            </small>
                            </div>
                            <p className="mt-2">
                            {item.text}
                            </p>
                            <ul className="iq-media-blog iq-mt-10">
                            <li>
                                <a target="_blank" href={item.author_url}>
                                    <i className="fa fa-google " />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>  
                    ))}
                </OwlCarousel>
            :
            <></>
            }
            </div>
        </div>
    </section>
    )
}