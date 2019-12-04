import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as RCSlider from 'rc-slider/lib/Slider';
import Handle from 'rc-slider/lib/Handle'

import cn25 from '../assets/cn25.png';
import cn50 from '../assets/cn50.png';
import cn75 from '../assets/cn75.png';
import cn100 from '../assets/cn100.png';
import cn125 from '../assets/cn125.png';
import cn150 from '../assets/cn150.png';
import cn175 from '../assets/cn175.png';
import cn200 from '../assets/cn200.png';

import './slider.css';
import 'rc-slider/assets/index.css';

const Slider = ({offsetPercentage, sliderOnAfterChange, sliderOnChange, currentMonth}) => {
  // const [offsetPercentage, setOffsetPercentage] = useState(currentMonth.offset_amount === 0 ? 0 : currentMonth.carbon_emissions / currentMonth.offset_amount * 100);
  const badges = [null, cn25, cn50, cn75, cn100, cn125, cn150, cn175, cn200];
  // const offsetPercentage = currentMonth.offset_amount === 0 ? 0 : currentMonth.carbon_emissions / currentMonth.offset_amount * 100;
  const badge = badges[Math.ceil(offsetPercentage / 25)];
  const mark = <p className='Slider__mark'>{offsetPercentage}%</p>

  // const calculate = () => {
  //   currentMonth.offset_amount === 0 ? 0 : currentMonth.carbon_emissions / currentMonth.offset_amount * 100
  // }
  console.log('o', offsetPercentage);

  return (
    <div className={`Slider ${offsetPercentage}`}>
      <RCSlider
        defaultValue={offsetPercentage}
        min={0}
        max={200}
        marks={{ [offsetPercentage]: mark }}
        step={5}
        onAfterChange={sliderOnAfterChange}
        onChange={sliderOnChange}
        handleStyle={{
          borderColor: 'black',
          backgroundColor: 'red',
        }}
        handle={ (handleProps) => {
        return (
          <Handle { ...handleProps }>
            <img className='Slider__img' src={badge} alt='' />
          </Handle>
        )
    }}
      />
    </div>
  );
};

Slider.propTypes = {
  offsetPercentage: PropTypes.number,
  sliderOnChange: PropTypes.func,
  sliderOnAfterChange: PropTypes.func,
  currentMonth: PropTypes.number
};

export default Slider;
