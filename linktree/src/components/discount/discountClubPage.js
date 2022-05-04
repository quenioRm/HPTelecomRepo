import React from "react";

export const DiscountClubPage = () => {
    return(
        <>
        <main className="content">
            <div className="container text-center">
                <div className="intro credit-title">
                <h1 className="font-weight-bold mb-0 d-block text-center">Clube de</h1>
                <h1 className="font-weight-bold mb-4 d-block text-center green">
                    descontos
                </h1>
                </div>
                <div className="page-about text-center m-0 m-auto">
                <div className="col-8 text-center pr-0 pl-0 m-0 m-auto mb-4">
                    <p>
                    Clientes da HP Telecom podem ganhar descontos exclusivos em vários estabelecimentos, cinemas, farmácias, lojas online e muitos outros.
                    </p>
                </div>
                <h4 className="font-weight-bold mb-0 d-block text-center custom-font">
                    Como funciona o
                </h4>
                <h4 className="font-weight-bold mb-4 d-block text-center custom-font">
                    o <span className="green">clube de descountos</span> ?
                </h4>
                <div className="col-8 text-center pr-0 pl-0 m-0 m-auto mb-5">
                    <p>
                    Simples, faremos um cadastro com seu CPF e você terá acesso a nossa página de descontos exclusivos.
                    </p>
                </div>
                <img
                    src="./assets/images/marcas.png"
                    className="d-block text-center m-0 m-auto pt-3 pb-3 img-fluid"
                />
                <div className="col-8 text-center pr-0 pl-0 m-0 m-auto mb-5">
                    <p>
                    *accompanhe os canais oficiais <br />
                    para potenciais mudancas
                    </p>
                </div>
                <img
                    src="./assets/images/card_1.png"
                    className="d-block text-center m-0 m-auto pt-3 pb-3 img-fluid"
                />
                <div className="col-8 text-center pr-0 pl-0 m-0 m-auto mb-5">
                    <p>
                    Você também terá um cartão fisico e um digital para poder facilitar ainda mais o seu acesso. <br />
                    </p>
                </div>
                <a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641" className="custom-button" style={{color:"white"}}>
                    saiba mais
                </a>
                <div>
                <br></br>
                <span style={{fontSize:"10px"}}>
                *Consulte condições de participação.
                </span>
                </div>
                </div>
            </div>
            </main>
        </>
    )
}