import React, { useEffect, Component } from 'react';
import NestedCarousel from './NestedCarousel.js';

class App extends Component {
  constructor() {
    super();
  }

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
