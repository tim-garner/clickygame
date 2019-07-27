import React from "react";

const Jumbotron = props => {
  return (
    <div className="jumbotron">
      {/* <h1>WWF Wrestlers</h1> */}
      <p>
      Clicky Game!
    Click on an image to earn points, but don't click on any more than once!
      </p>
      {/* <h1>WWF Wrestler Memory Game!</h1> */}
        <h1 className="score" id="wsc">{props.total}</h1>
        <h1 className="status" id="wsc">{props.status}</h1>
    </div>
  );
}

export default Jumbotron;
