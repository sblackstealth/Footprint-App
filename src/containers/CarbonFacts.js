import React, { Component } from 'react';
import facts from '../carbonFacts';

class CarbonFacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFacts: facts,
      currentFacts: []
    }
  }

  componentDidMount() {
    const currentFacts = [];

    while(currentFacts.length < 3) {
      const random = Math.floor(Math.random() * 11);

      if(!currentFacts.includes(this.state.allFacts[random])) {
        currentFacts.push(this.state.allFacts[random]);
      }
    }
    this.setState({ currentFacts });
  }

  render() {
    const { currentFacts } = this.state;

    return (
    currentFacts.length ? (
        <div>
          <div className="Main__carbon-facts">
          {
            this.state.currentFacts.map((fact, index) => (
              <p className="Main__fact" key={index}>
                {fact}
              </p>
            ))
          }
          </div>
        </div>
      ) : <h1>Facts are loading...</h1>
    )
  }
}

export default CarbonFacts;
