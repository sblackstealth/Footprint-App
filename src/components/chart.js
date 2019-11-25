import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Videos made',
            backgroundColor: 'rgba(255, 0, 255, 0.75)',
            data: [4, 5, 1, 10, 32, 2, 12]
          },
          {
            label: 'Subscription',
            backgroundColor: 'rgba(255, 0, 100, 0.75)',
            data: [14, 15, 11, 20, 0, 12, 32]
          },
        ]
      }
    }
  }

  render() {
    return (
      <div style={{ position: 'relative', width: '500px', height: '550px'}}>
          <Bar
            options={{
              responsive: true
            }}
            data={this.state.data}
          />
      </div>
    );
  }
}

export default chart;