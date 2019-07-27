import React, { Component } from "react";


const Navbar = props => (
  <nav className= "navbar navbar-expand-lg navbar-light bg-light">
     
        <h1>WWF Wrestler Memory Game!</h1>
        <h2 className="score">{props.total}</h2>
        <h2 className="status">{props.status}</h2>

  </nav>
);




export default Navbar;