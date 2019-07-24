import React, { Component } from "react";
import WrestlerCard from "./components/WrestlerCard";
import Wrapper from "./components/Wrapper";
import wrestlers from "./wrestlers.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";


class App extends Component {
  state = {
    wrestlers
  
};
render() {
  return (
    <Wrapper>
         <Navbar />
      <Jumbotron />
      {this.state.wrestlers.map(wrestlers => (
        <WrestlerCard
        id={wrestlers.id}
        key={wrestlers.id}
        name={wrestlers.name}
        image={wrestlers.image}

        />
      ))}
    </Wrapper>
  );
}
}

export default App;
