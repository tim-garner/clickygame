import React, { Component } from "react";
import WrestlerCard from "./components/WrestlerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import wrestlers from "./wrestlers.json";

class App extends Component {
  state = {
    wrestlers
  
};
render() {
  return (
    <Wrapper>
      <Title>WWF Wrestlers</Title>
      {this.state.wrestlers.map(wrestlers => (
        <WrestlerCard
        id={wrestlers.id}
        key={wrestlers.id}
        name={wrestlers.name}
        image={wrestlers.image}
        nickename={wrestlers.nickename}
        born={wrestlers.born}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
