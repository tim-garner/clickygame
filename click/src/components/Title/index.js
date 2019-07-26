import React from "react";
import "./style.css";

// function Title(props) {
//     return <h1 Classname="title">{props.children}</h1>;
// }

const Title = props => (
    <div className="game">
        <h2 className="score">{props.total}</h2>
        <h2 className="status">{props.status}</h2>
    </div>
);



export default Title;
