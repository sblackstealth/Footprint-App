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
            // yAxisID: 'A'
          },
          {
            label: 'Carbon Offsets', 
            backgroundColor: '#D18C29',
            data: [53.76,55.94, 54.91, 59.12, 52.22, 56.34, 55.55, 112.88, 109.50, 0, 0],
            // yAxisID: 'B'
          }
        ]
      }
    }
  }
  
  render() {
    console.log(data)
    return (
      <div className="Data-chart" style={{ position:'relative',width:'800px'}}>
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            // scales: {
            //   yAxes: [
            //     {
            //       id: 'A',
            //       type: 'linear',
            //       position: 'left',
            //       ticks: {
            //         // min: 1.4,
            //         // max: 1.9
            //       }
            //     },
            //     {
            //       id: 'B',
            //       type: 'linear',
            //       position: 'right',
            //     }
            //   ]
            // },
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
