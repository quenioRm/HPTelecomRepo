import React from "react";
import './benefits.css';

function Benefits() {
    return (
        <section className="container-Benefits">
            
                <h2>Internet 100% fibra óptica</h2>
                <div className="divisor"></div>

                <div className="carrossel-Benefits">
                    <div className="grade">
                        <div className="slides">
                            <div className="slide primeira">
                                <img src={('../../../public/assets/images/icons/card.svg')} alt='Clube de desconto' />
                                <h5>Clube de desconto</h5>
                                <p>Uma descrição aqui do que é o Clube desconto e o que o cliente tem a ganhar em escolher um plano com ele, ou montar um plano com ele.</p>
                            </div>
                        </div>

                        <div className="slide">
                            <img src={('../../../public/assets/images/icons/card.svg')} alt='Wi-Fi 6' />
                            <h5>Wi-Fi 6</h5>
                            <p>Uma descrição aqui do que é o Clube desconto e o que o cliente tem a ganhar em escolher um plano com ele, ou montar um plano com ele.</p>
                        </div>
                        <div className="slide">
                            <img src={('../../../public/assets/images/icons/card.svg')} alt='Clube de desconto' />
                            <h5>Clube de desconto</h5>
                            <p>Uma descrição aqui do que é o Clube desconto e o que o cliente tem a ganhar em escolher um plano com ele, ou montar um plano com ele.</p>
                        </div>
                    </div>
                </div>

                <div id="canais">
                    <h2>Canais</h2>
                    <div className="divisor"></div>
                    <p>Confira abaixo alguns dos principais canais</p>
                    
                    <h5>Canais abertos</h5>
                    <img src={('../../../public/assets/images/icons/card.svg')} alt='Canais abertos' />
                    <span className="plus">+</span>
                    <h5>Canais fechados</h5>
                    <img src={('../../../public/assets/images/icons/card.svg')} alt='Canais fechados' />
                </div>

                <div className="contatos-para-assinar">
                    <h2>Assine agora mesmo</h2>
                    <div className="divisor"></div>
                    <p>Como você quer assinar ?</p>
                    
                    <div className="links-contato">
                        <a href="tel:1128762641">
                            <img src={('../../../public/assets/images/icons/card.svg')} alt='Telefone' />
                            <p>Ligue agora</p>
                        </a>
                        <a href="">
                            <img src={('../../../public/assets/images/icons/card.svg')} alt='gmail' />
                            <p>Mande um E-mail</p>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=551128762641">
                            <img src={('../../../public/assets/images/icons/card.svg')} alt='WhatsApp' />
                            <p>Mande uma mensagem</p>
                        </a>
                    </div>


                </div>
                


            </section>

            

            )
}
            export default Benefits;