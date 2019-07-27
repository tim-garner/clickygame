import React, { Component } from "react";
import WrestlerCard from "./components/WrestlerCard";
import Wrapper from "./components/Wrapper";
import wrestlers from "./wrestlers.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title/";

class App extends Component {
  state = {
    wrestlers,
    score: 0,
    goal: 8,
    clickedWwfIds: [],
    status: ""
  
};

wsc = id => {
  let clickedWwfIds= this.state.clickedWwfIds;

  if(clickedWwfIds.includes(id)){
    this.setState({ clickedWwfIds: [], score: 0, status:  "lost!" });
    return;
  }else{
    clickedWwfIds.push(id)

    if(clickedWwfIds.length === 8){
      this.setState({clickedWwfIds: [], score: 12, status: "You Won!! Click again",});
      console.log("You Win");
      return;
  
    }

    this.setState({ wrestlers,  clickedWwfIds, score: clickedWwfIds.length, status: "" });

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
          {/* <Jumbotron /> */}
         {/* <Navbar /> */}
         <Jumbotron total={this.state.score} status={this.state.status} />
         {/* goal={8}
         status={this.state.status} */}
      
      {/* <Jumbotron /> */}
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