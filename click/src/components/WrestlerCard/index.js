import React from "react";
import "./style.css";
import { Row, Col } from 'react-simple-flex-grid';

 
function WrestlerCard(props) {
    return (
        // <div className="card">
        
        <Row vertical="center">
            
    
        <Col span={12} className="card" Row horizontal="center">
           
           <div className="img-container" >
               <img alt={props.name} src={props.image} id={props.id}
               onClick={ () => props.wsc(props.id)}className="wscscores" />
       </div>
        </Col>
    
     </Row>
    //  </div>
    );
}

export default WrestlerCard;