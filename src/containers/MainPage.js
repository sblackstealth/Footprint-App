import React, { Component } from 'react';
import axios from 'axios';
import CarbonFacts from './CarbonFacts';
import Slider from '../components/Slider';
import TableView from '../components/tableView';
import DataChart from '../components/DataChart';
import Modal from '../components/Modal';

import './mainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carbonAmount: 15,
      offsetPercentage: 100,
      isModalOpen: false,
      offsetData: {},
    };

    this.offsetHandler = this.offsetHandler.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  // Checks to see if slider amount is increased. If so, cloverly handler is called.
  offsetHandler(amount) {
    const { offsetPercentage } = this.state;

    if (amount <= offsetPercentage) {
      this.setState({ offsetPercentage });
    } else {
      this.setState({ offsetPercentage: amount });
      this.cloverlyHandler(amount);
      this.openModal()
    }
  }

  // Passes an amount in weight to the cloverly api
  async cloverlyHandler(amount) {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.cloverly.com/2019-03-beta/purchases/electricity',
        data: JSON.stringify({ energy: { value: 100800, units: 'kwh' } }),
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer public_key:47800ea0ee541b4c',
        },
      });
      // eslint-disable-next-line no-console
      this.setState({ offsetData: response.data })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  openModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    const { offsetPercentage } = this.state;
    return (
      <div className="Main">
        <div className="Main__graphs">
          <TableView />
          <DataChart />
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
              <CarbonFacts />
              <Modal
                isModalOpen={this.state.isModalOpen}
                offsetData={this.state.offsetData}
                openModal={this.openModal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
