import React, { Component } from 'react';
import Slider from 'rc-slider';


class MainPage extends Component {
  render() {
    return (
      <div className="Main">
        <h1 className="Main__header">Footprints</h1>
        <div className="Main__graphs">
          <div className="Main__graph"></div>
          <div className="Main__graph"></div>
          <div className="Main__graph"></div>
        </div>
        <div className="Main__carbon-info">
          <div className="Main__months">

          </div>
          <div className="Main__carbon-slider">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
