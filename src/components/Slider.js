import React from 'react';
import PropTypes from 'prop-types';
import * as RCSlider from 'rc-slider/lib/Slider';

import './slider.css';
import 'rc-slider/assets/index.css';

const Slider = ({offsetPercentage, offsetHandler}) => {
  return (
    <div className="Slider">
      <RCSlider
        defaultValue={offsetPercentage}
        min={0}
        max={250}
        marks={{ [offsetPercentage]: offsetPercentage }}
        step={5}
        onAfterChange={offsetHandler}
      />
    </div>
  );
};

Slider.propTypes = {
  offsetPercentage: PropTypes.number,
  offsetHandler: PropTypes.func
};

export default Slider;
