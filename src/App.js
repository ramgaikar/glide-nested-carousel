import React, { Component } from "react";
import NestedCarousel from "./ParentCarousel.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Glide Nester Carousel Example</h1>
        <NestedCarousel></NestedCarousel>
      </div>
    );
  }
}

export default App;
