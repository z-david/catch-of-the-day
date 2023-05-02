import React, {useState} from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from './Fish';

import sampleFishes from '../sample-fishes'

class App extends React.Component {
  constructor(){
    super();
  }
  state = {
    fishes: {},
    order: {}
  }

  loadSampleFishes = () => {
    console.log(sampleFishes);
    const fishes = {...this.state.fishes, ...sampleFishes};
    this.setState({fishes: fishes});
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => 
                <Fish details={this.state.fishes[key]} key={key} />
              )}
            
            </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
