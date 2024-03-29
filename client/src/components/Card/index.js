import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import Caption from '../Caption';


function Card(props) {
  
    
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      {/* <Caption /> */}
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      ><i class="fas fa-paw"></i></CardBtn>
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      ><i class="fas fa-paw"></i></CardBtn>
    </div>
  );
}

export default Card;
