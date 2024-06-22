import React from 'react';

import { Range, Slider, SliderContainer } from './style';
import { DualRangeSliderProps } from './types';

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min,
  max,
  minValue,
  maxValue,
  onChange,
}) => {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    onChange(value, maxValue);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    onChange(minValue, value);
  };

  return (
    <SliderContainer>
      <Range minValue={minValue} maxValue={maxValue} min={min} max={max} />
      <Slider
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
      />
      <Slider
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
      />
    </SliderContainer>
  );
};

export default DualRangeSlider;
