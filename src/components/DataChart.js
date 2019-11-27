import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov'],
        datasets: [
          {
            label: 'PuE', 
            backgroundColor: '#233B3B',
            data: [1.65, 1.75, 1.5, 1.65, 1.5, 1.5, 1.75, 1.75, 1.75, 1.65, 1.65],
            yAxisID: 'A'
          },
          {
            label: 'Watt Hours', 
            backgroundColor: '#D18C29',
            data: [100800, 104904, 102960, 110856, 97920, 105648, 104160, 105840, 102672, 97920, 48240],
            yAxisID: 'B'
          }
        ]
      }
    }
  }
  
  render() {
    return (
      <div className="Data-chart" style={{ position:'relative',width:'800px'}}>
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  id: 'A',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    min: 1.4,
                    max: 1.9
                  }
                },
                {
                  id: 'B',
                  type: 'linear',
                  position: 'right',
                }
              ]
            },
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
