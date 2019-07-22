import React from "react";
import "./style.css";
 
function WrestlerCard(props) {
    return (
        <div className="card">
            <div className="img-container" >
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Nickname</strong> {props.nickename}
                    </li>
                    <li>
                        <strong>Born:</strong> {props.born}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.addsWrestler(props.id)} className="">
                x
            </span>
        </div>
    );
}

export default WrestlerCard;