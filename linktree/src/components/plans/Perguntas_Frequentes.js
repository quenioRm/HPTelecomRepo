import React from "react";
import './benefits.css';

function Perguntas_Frequentes(props) {
    return (
        <div>
                        <ul className="perguntas">
                            <li className="lista-perguntas">
                            {props.perguntas}                   
                            </li>
                            
                            <img className="" src={require('./img/Seta.png')} alt='Clube de desconto' />  
                        </ul>

                        
                    </div>
    )
}

export default Perguntas_Frequentes;