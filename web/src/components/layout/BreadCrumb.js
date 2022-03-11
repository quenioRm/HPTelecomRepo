import React from "react";

export const BreadCrumb = (props) => {
    return(
        <section
            className="iq-bg iq-bg-fixed iq-over-black-70 jarallax iq-breadcrumb text-center text-white"
            style={{ backgroundImage: "none", backgroundPosition: "center center", height:"200px" }}
            data-jarallax-original-styles="background-image: url('images/bg/bg-2.jpg'); background-position: center center;"
            >
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="heading-title iq-mb-25">
                        {props.pageName ? 
                            <h2 className="title text-uppercase text-white ">{props.pageName}</h2>
                            :
                            <></>
                        }
                        </div>
                    </div>
                </div>
            </div> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"></li>
                </ol>
            </nav>
            <div
                id="jarallax-container-0"
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: -100
                }}
            >
                <div
                style={{
                    backgroundPosition: "50% 50%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:"",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 1348,
                    overflow: "hidden",
                    pointerEvents: "none",
                    marginTop: "43.5391px",
                    transform: "translate3d(0px, -17.7391px, 0px)"
                }}
                />
            </div>
        </section>
    )
}