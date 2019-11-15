import React, { Component } from 'react';
import Slider from '../components/Slider';

import './mainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main__graphs">
          <div className="Main__graph">graph will go here</div>
          <div className="Main__graph">graph will go here</div>
          <div className="Main__graph">graph will go here</div>
        </div>
        <div className="Main__carbon-info">
          <div className="Main__months">
            <h3>Months Carbon Positive</h3>
            <div className="Main__month-chart">
              {
                ['January', 'February', 'May', 'June', 'July', 'August'].map((month) => (
                  <div className="Main__month" key={month}>
                    <div className="radio"><input type="radio" /></div>
                    <p>{month}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="Main__carbon-offsets">
            <div className="Main__slider">
              <h3>Carbon Offset</h3>
              <Slider />
            </div>
            <div className="Main__did-you-know">
              <h3>Did you now?</h3>
              <div className="Main__carbon-facts">
                <p className="Main__fact">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="Main__fact">Ad sed corrupti recusandae, ex facilis officia illum illo! Nulla ut impedit asperiores accusamus</p>
                <p className="Main__fact">odio eveniet, corporis totam dolore, quis sed autem?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
