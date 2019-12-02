import React from 'react';
import PropTypes from 'prop-types';
import * as RCSlider from 'rc-slider/lib/Slider';

import './slider.css';
import 'rc-slider/assets/index.css';

const Slider = ({offsetPercentage, sliderOnAfterChange, sliderOnChange}) => {
  return (
    <div className="Slider">
      <RCSlider
        defaultValue={offsetPercentage}
        min={0}
        max={200}
        marks={{ [offsetPercentage]: offsetPercentage + '%' }}
        step={5}
        onAfterChange={sliderOnAfterChange}
        onChange={sliderOnChange}
      />
    </div>
  );
};

Slider.propTypes = {
  offsetPercentage: PropTypes.number,
  offsetHandler: PropTypes.func
};

export default Slider;
