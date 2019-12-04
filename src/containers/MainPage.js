import React, { Component } from 'react';
import axios from 'axios';
import CarbonFacts from './CarbonFacts';
import Slider from '../components/Slider';
import TableView from '../components/tableView';
import DataChart from '../components/DataChart';
import Modal from '../components/Modal';
import MonthChart from '../components/MonthChart';
import data from '../data';

import './mainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      offsetPercentage: 100,
      isModalOpen: false,
      offsetData: {},
      monthsChecked: [],
      checked: 0
    };

    this.openModal = this.openModal.bind(this);
    this.sliderOnAfterChange = this.sliderOnAfterChange.bind(this);
    // this.sliderOnChange = this.sliderOnChange.bind(this);
    this.updateChecked = this.updateChecked.bind(this);
  }

  componentDidMount() {
    const positiveMonths = this.state.data.map(month => (
      { id: month.name, checked: false, emissions: month.carbon_emissions }
    ))

    this.setState({ monthsChecked: positiveMonths })
  }

  // updateSlider(id, amount) {

  // }

  updateChecked(month) {
    const {carbon_emissions, offset_amount} =  this.state.data[month];
    const offsetPercentage = offset_amount === 0 ? 0 : carbon_emissions / offset_amount * 100;

    this.setState({ checked: month , offsetPercentage });
  }

  // Checks to see if slider amount is increased. If so, cloverly handler is called.
  sliderOnAfterChange(amount) {
    if (amount > 0) {
      this.cloverlyHandler(amount);
      this.openModal();
    }
  }

  sliderOnChange(amount) {
    const { data, checked } = this.state;
    const offset_amount = Math.ceil((amount / 100) * data[checked].carbon_emissions);
    const offsetMonth = {...data[checked], offset_amount };
    this.setState({offsetMonth});
  }

  updateData = (carbon_emissions) => {
    const { data, checked } = this.state;
    const dataCopy = [...data];
    dataCopy[checked] = {...dataCopy[checked], carbon_emissions};
    this.setState({ data: dataCopy });
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

  render() {
    console.log('statteee', this.state);
    const { offsetPercentage } = this.state;
    return (
      <div className="Main">
        <div className="Main__graphs">
          <TableView tableData={this.state.data} />
          <DataChart chartData={this.state.data} />
        </div>
        <div className="Main__carbon-info">
          <div className="Main__months">
            <h3>Months Carbon Positive</h3>
            <MonthChart
              monthsChecked={this.state.monthsChecked}
              isMonthPositive={this.isMonthPositive}
              updateChecked={this.updateChecked}
              checked={this.state.checked}
            />
          </div>
          <div className="Main__carbon-offsets">
            <div className="Main__slider">
              <h3>Carbon Offset</h3>
              <br />
              <Slider
                sliderOnAfterChange={this.sliderOnAfterChange}
                sliderOnChange={this.sliderOnChange}
                currentMonth={data[this.state.checked]}
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
