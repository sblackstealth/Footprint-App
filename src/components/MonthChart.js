import React from 'react';
import PropTypes from 'prop-types';
import './monthchart.css';

const MonthChart = ({monthsChecked, updateChecked, checked }) => {
  return (
    <div className="Main__month-chart2">
      {monthsChecked.map(
        (month, i) => (
          <div className="Main__month2" key={i}>
            <label className="container">{month.id}
              <input type="checkbox" checked={checked === i} onChange={() => updateChecked(i)} />
              <span className="checkmark"></span>
            </label>
          </div>
        )
      )}
    </div>
  );
};

MonthChart.propTypes = {
  monthsChecked: PropTypes.array.isRequired,
};

export default MonthChart;
