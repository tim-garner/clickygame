import React from "react";

const Jumbotron = props => {
  return (
    <div className="jumbotron">

      <p>
      Clicky Game!
    Click on an image to earn points, but don't click on any more than once!
      </p>

        <h1 className="score" id="wsc">{props.total}</h1>
        <h1 className="status" id="wsc">{props.status}</h1>
        <h1 className="highscore" id="wsc">{props.highscore}</h1>
    </div>
  );
}

export default Jumbotron;
