import React from "react";
import "./CardPequeno.css";

function CardPequeno(props){
  return(
    <div className="page-section-container-2">
    <img src={props.image} />
    <p><b>{props.tipo}</b>{props.texto}</p>
    </div>
  )

}
export default CardPequeno