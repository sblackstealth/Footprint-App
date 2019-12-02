import React from 'react';
import './monthchart.css';

const MonthChart = ({monthsChecked, isMonthChecked}) => {
  return (
    <div className="Main__month-chart2">
      {monthsChecked.map(
        month => (
          <div className="Main__month2" key={month.id}>
            <label className="container">{month.id}
              <input type="checkbox" checked={month.checked} onChange={() => isMonthChecked(month.id)} />
              <span className="checkmark"></span>

            </label>
          </div>
        )
      )}
    </div>
  );
};

export default MonthChart;