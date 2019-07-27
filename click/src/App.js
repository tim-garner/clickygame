import React, { Component } from "react";
import WrestlerCard from "./components/WrestlerCard";
import Wrapper from "./components/Wrapper";
import wrestlers from "./wrestlers.json";
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title/";

class App extends Component {
  state = {
    wrestlers,
    score: 0,
    goal: 14,
    clickedWwfIds: [],
    status: "",
    highscore: 0
};

wsc = id => {
  let clickedWwfIds= this.state.clickedWwfIds;

  if(clickedWwfIds.includes(id)){
    this.setState({ clickedWwfIds: [], score: 0, status:  "lost!",});
    return;
  }else{
    clickedWwfIds.push(id)

    if(clickedWwfIds.length === 14){
      this.setState({clickedWwfIds: [], score: 14, status: "You Won!! Click again",});
      console.log("You Win");
      return;
  
    }

    this.setState({ wrestlers,  clickedWwfIds, score: clickedWwfIds.length, status: "", });

    for (let i =wrestlers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wrestlers[i], wrestlers[j]] = [wrestlers[j], wrestlers[i]];
    }
  }
}


render() {
  return (
    <Wrapper>
      <Title />

         <Jumbotron total={this.state.score} status={this.state.status} />
 
      {this.state.wrestlers.map(wrestlers => (
        <WrestlerCard
        wsc={this.wsc}
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