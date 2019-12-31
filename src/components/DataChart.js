import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
// import data from '../data';

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
          {
            label: 'Carbon Emissions',
            backgroundColor: '#233B3B',
            data: this.props.chartData.map(month => month.carbon_emissions),
          },
          {
            label: 'Carbon Offsets',
            backgroundColor: '#D18C29',
            data: this.props.chartData.map(month => month.offset_amount),
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="Data-chart" style={{ position: 'relative', width: '49%' }}>
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            legend: {
              position: 'bottom'
            }
          }}
        />
      </div>
    );
  }
}

DataChart.propTypes = {
  chartData: PropTypes.array.isRequired
};

export default DataChart;
