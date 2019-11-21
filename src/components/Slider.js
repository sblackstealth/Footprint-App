import React from 'react';
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

export default Slider;
