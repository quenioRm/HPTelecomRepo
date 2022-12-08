import React,{useEffect, useState} from "react";
import Api from "../../service/Api";
import './coments.css';

export const ComentPage = () => {

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
        <>
        <main className="content">
            <div className="container text-center">
                <div className="google-intro mb-4">
                <img
                    src="./assets/images/google-logo.png"
                    alt="google"
                    className="img-fluid"
                />
                </div>
                {reviews ?
                reviews.map((item, key) => (
                 <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-left pl-1 mb-4 review">
                    <div className="row">
                        <div className="col-9 review-title">
                        5.00 <span>{item.author_name}:</span>
                        <div className="stars">
                            <i className="fa fa-star text-warning star" />
                            <i className="fa fa-star text-warning star" />
                            <i className="fa fa-star text-warning star" />
                            <i className="fa fa-star text-warning star" />
                            <i className="fa fa-star text-warning star" />
                        </div>
                        </div>
                        <div className="col-3 review-img text-right">
                        <div className="review-circle">
                            <img
                            src={item.profile_photo_url}
                            alt="Cliente que fez a avaliação"
                            className="img-fluid"
                            />
                        </div>
                        </div>
                    </div>
                    <div>
                        <p className="avaliacao">
                        {item.text}
                        </p>
                    </div>
                </div>
                )) 
                :
                <></>
                }
            </div>
            </main>
        </>
    )
}