import React, { Component } from 'react';
import axios from 'axios';
import CarbonFacts from './CarbonFacts';
import Slider from '../components/Slider';
import TableView from '../components/tableView';
import DataChart from '../components/DataChart';
import Modal from '../components/Modal';
import MonthChart from '../components/MonthChart';

import './mainPage.css';


class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carbonAmount: 15,
      offsetPercentage: 100,
      isModalOpen: false,
      offsetData: {},
      monthsChecked: [
        {
          id:'April',
          checked: true,
        },
        {
          id:'October',
          checked: false,
        },
        {
          id:'June',
          checked: false,
        }
      ],
    };

    this.openModal = this.openModal.bind(this);
    this.isMonthChecked = this.isMonthChecked.bind(this);
  }

  // Checks to see if slider amount is increased. If so, cloverly handler is called.
  sliderOnAfterChange = (amount) => {
    this.cloverlyHandler(amount);
    this.openModal()
  }

  sliderOnChange = (amount) => {
    this.setState({ offsetPercentage: amount });
  }

  // Passes an amount in weight to the cloverly api
  async cloverlyHandler() {
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

  isMonthChecked (id) {
    const updatedMonths = this.state.monthsChecked.map(month => month.id === id ? { id, checked: !month.checked } : month)
    this.setState({ monthsChecked: updatedMonths })
  }

  render() {
    console.log(this.state)
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
            <MonthChart monthsChecked={this.state.monthsChecked} isMonthChecked={this.isMonthChecked} />
          </div>
          <div className="Main__carbon-offsets">
            <div className="Main__slider">
              <h3>Carbon Offset</h3>
              <Slider
                offsetPercentage={offsetPercentage}
                sliderOnAfterChange={this.sliderOnAfterChange}
                sliderOnChange={this.sliderOnChange}
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
