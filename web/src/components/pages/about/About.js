import react from "react";
import { BreadCrumb } from "../../layout/BreadCrumb";

export const About = () => {

    let pageName = ""

    return(
        <>
        <BreadCrumb pageName={pageName} />
            <section className="overview-block-ptb">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20">Manifesto <span style={{color:"#008C1E"}}>Hayp</span></h3>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col"><img className="aboutImg1" src="/images/about/Group.png" /></div>
                            <div className="col">
                                <img className="aboutImg2" src="/images/about/Group_2.png" />

                                <span className="aboutText1Title">
                                    Existimos por um mundo mais conectado.
                                    <p>
                                    <div>Por uma realidade mais integrada e inclusiva.</div>
                                    <div>Onde todos possam ter acesso a informação. </div>
                                    <div>Acesso à comunicação, à conexão. </div>
                                    <div>Conexão que tem o poder de dar voz àqueles que não estão conectados. </div>
                                    <div>Àqueles que não fazem parte da rede, mas que agora farão. </div>
                                    <div>Fazemos questão de dar voz ao que a TV não mostra. </div>
                                    <div>Para isso vamos conectar pessoas para revelar realidades distintas. </div>
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"><img className="aboutImg3" src="/images/about/Group_3.png" /></div>
                            <div className="col"><img className="aboutImg4" src="/images/about/Group_1.png" /></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <span className="aboutText2Title">
                                    <p style={{fontFamily:'GorditaFont', color:'#000000'}} className="aboutText2Title">
                                        Por que somos <span style={{color:"#008C1E"}}>Hayp</span>!
                                    </p>
                                    <p>
                                    Levamos conexão acessível, de qualidade com grande velocidade e 
                                    atendimento excelente àqueles que não tem.
                                    </p>
                                    <p>
                                    Conexão que leva inclusão social e digital para milhares de pessoas.
                                    E queremos fazer a diferença na vida delas!
                                    </p>
                                    <p>
                                    Queremos enaltecer o lado humano, a atenção aos detalhes, o 
                                    envolvimento com cada serviço e a compreensão das diversas 
                                    necessidades.
                                    </p>
                                    <p>
                                    Esses sim, são frutos de uma empresa que pensa em pessoas.
                                    E só assim proporcionaremos uma realidade diferente.
                                    </p>
                                    <p>
                                    Porque acreditamos em um mundo conectado e que fazemos parte dele.
                                    Reconhecemos o poder da conexão. 
                                    </p>
                                    <p style={{fontFamily:'GorditaFont', color:'#000000'}}>
                                    Bem-vindo ao universo <span style={{color:"#008C1E"}}>Hayp</span>.
                                    </p>
                                </span>
                            </div>
                            <div className="col"><img className="aboutImg5" src="/images/about/ilustração.png" /></div>
                        </div>
                    </div>
                    <div className="aboutRectangle" >
                        <div className="col"><img className="aboutRectangleImg"
                            src="/images/about/Rectangle_1.png" /></div>
                    </div>

                    <p style={{fontFamily:'GorditaFont', color:'#000000', fontSize:"18px"}} className="aboutText2Title">
                        Missão
                    </p>
                    <p style={{position:"relative", left:"270px"}} className="col-md-6 text-center">
                    Levar conexão de qualidade, através de um 
                    atendimento e um serviço de excelência, ao máximo 
                    de pessoas que conseguirmos, com o intuito de 
                    promover a inclusão digital e social.
                    </p>
                    <p style={{fontFamily:'GorditaFont', color:'#000000', fontSize:"18px"}} className="aboutText2Title">
                        Visão
                    </p>
                    <p style={{position:"relative", left:"270px"}} className="col-md-6 text-center">
                    Proporcionar uma realidade onde a conexão que 
                    oferecemos às pessoas possa contribuir para a 
                    inclusão digital e social, promovendo um mundo 
                    mais conectado.
                    </p>
                    <p style={{fontFamily:'GorditaFont', color:'#000000', fontSize:"18px"}} className="aboutText2Title">
                        Valores
                    </p>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <ul>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Qualidade:</span></strong> Do atendimento até o pós-venda, da instalação ao suporte, de um simples problema a uma solução incrível. 
                                    Enxergamos qualidade na prestação de serviço como um todo, sempre buscando a satisfação do cliente em primeiro lugar. 
                                    </li>
                                </p>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Comprometimento:</span></strong> Com o cliente, dando todo o suporte necessário em sua jornada aqui na empresa. 
                                    Entrega de um serviço redondo do jeito que foi contratado. 
                                    </li>
                                </p>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Acessibilidade:</span></strong> Através de uma conexão com funcionamento pleno e boa acessibilidade 
                                    promovemos a inclusão de pessoas em um ambiente digital para que tenham sucesso em suas demandas profissionais, educacional, de entretenimento ou lazer. 
                                    </li>
                                </p>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Inovação:</span></strong> Entender a necessidade do cliente e propor soluções que o atendam, sempre de forma conectada e inteligente. 
                                    </li>
                                    <div className="col"><img className="aboutImg6" src="/images/about/Group_4.png" /></div>
                                </p>
                            </ul>
                            </div>
                            <div className="col">
                            <ul>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Excelência:</span></strong> A excelência está no pleno funcionamento da conexão, no suporte e no atendimento rápido para a resolução de problemas, sempre com um sorriso no rosto e uma simpatia de tocar o coração.
                                    A excelência está desde a contratação do serviço até a entrega do que foi prometido.
                                    </li>
                                </p>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Tecnologia:</span></strong>Respiramos tecnologia, e prezamos por levar a inovação ao maior número de pessoas possível. 
                                    </li>
                                </p>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Ética:</span></strong> Respeitamos pessoas, cuidamos de clientes, valorizamos parceiros, sempre de forma justa e correta para o bem das relações pessoais e comerciais. 
                                    </li>
                                </p>
                                <p>
                                    <li className="col-12">
                                    <strong><span style={{color:"#008C1E"}}>Humano:</span></strong> Enxergamos além do serviço: percebemos quem são nossos clientes e quais são suas necessidades, levando atendimento atencioso e humanizado.
                                    </li>
                                    <div className="col"><img className="aboutImg7" src="/images/about/Group_5.png" /></div>
                                </p>
                            </ul>
                            </div>
                        </div>
                    </div>


                    <div className="aboutRectangle1" >
                        <div className="col"><img className="aboutRectangleImg"
                            src="/images/about/Rectangle_2.png" /></div>
                    </div>

                </div>
            </section>
        </>
    )
}