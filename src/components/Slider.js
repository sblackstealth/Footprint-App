import React from 'react';
import * as RCSlider from 'rc-slider/lib/Slider';

import './slider.css';
import 'rc-slider/assets/index.css';

const Slider = () => {
  const sliderValue = 175;

  return (
    <div className="Slider">
      <RCSlider
        defaultValue={0}
        min={0}
        max={250}
        marks={{ [sliderValue]: sliderValue }}
        step={null}
      />
    </div>
  );
};

export default Slider;
