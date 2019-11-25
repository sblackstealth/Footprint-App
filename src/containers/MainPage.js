import React, { Component } from 'react';
import axios from 'axios';
import Slider from '../components/Slider';
import TableView from '../components/tableView';

import './mainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carbonAmount: 15,
      offsetPercentage: 100,
    };

    this.offsetHandler = this.offsetHandler.bind(this);
  }

  // Checks to see if slider amount is increased. If so, cloverly handler is called.
  offsetHandler(amount) {
    console.log(amount);
    const { offsetPercentage } = this.state;

    if (amount <= offsetPercentage) {
      this.setState({ offsetPercentage });
    } else {
      this.cloverlyHandler(amount);
      this.setState({ offsetPercentage: amount });
    }
  }

  // Passes an amount in weight to the cloverly api
  async cloverlyHandler(amount) {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.cloverly.com/2019-03-beta/purchases/carbon',
        data: JSON.stringify({ weight: { value: amount, units: 'kg' } }),
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer public_key:47800ea0ee541b4c',
        },
      });
      await console.log('cloverly', response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { offsetPercentage } = this.state;
    return (
      <div className="Main">
        <div className="Main__graphs">
          <TableView />
          <div className="Main__graph">graph will go here</div>
          <div className="Main__graph">graph will go here</div>
        </div>
        <div className="Main__carbon-info">
          <div className="Main__months">
            <h3>Months Carbon Positive</h3>
            <div className="Main__month-chart">
              {['January', 'February', 'May', 'June', 'July', 'August'].map(
                month => (
                  <div className="Main__month" key={month}>
                    <div className="radio">
                      <input type="radio" />
                    </div>
                    <p>{month}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="Main__carbon-offsets">
            <div className="Main__slider">
              <h3>Carbon Offset</h3>
              <Slider
                offsetPercentage={offsetPercentage}
                offsetHandler={this.offsetHandler}
              />
            </div>
            <div className="Main__did-you-know">
              <h3>Did you now?</h3>
              <div className="Main__carbon-facts">
                <p className="Main__fact">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="Main__fact">
                  Ad sed corrupti recusandae, ex facilis officia illum illo!
                  Nulla ut impedit asperiores accusamus
                </p>
                <p className="Main__fact">
                  odio eveniet, corporis totam dolore, quis sed autem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
