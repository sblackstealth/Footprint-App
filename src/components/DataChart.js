import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import data from '../data';

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
        datasets: [
          {
            label: 'Carbon Emissions', 
            backgroundColor: '#233B3B',
            data: [53.76,55.94, 54.91, 59.12, 52.22, 56.34, 55.55, 56.44, 54.75, 52.22, 25.72],
          },
          {
            label: 'Carbon Offsets', 
            backgroundColor: '#D18C29',
            data: [53.76,55.94, 54.91, 59.12, 52.22, 56.34, 55.55, 112.88, 109.50, 0, 0],
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="Data-chart" style={{ position:'relative',width:'49%'}}>
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

export default DataChart;
