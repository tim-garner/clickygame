import React from "react";
import "./style.css";
import { Row, Col } from 'react-simple-flex-grid';

 
function WrestlerCard(props) {
    return (

        
        <Row vertical="center">
            
    
        <Col span={12} className="card" Row horizontal="center">
           
           <div className="img-container" >
               <img alt={props.name} src={props.image} />
       </div>
        </Col>
    
     </Row>
    );
}

export default WrestlerCard;