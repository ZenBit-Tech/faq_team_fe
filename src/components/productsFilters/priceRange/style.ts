import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Slider = styled.input<{ theme?: Theme }>`
  width: 100%;
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  background: transparent;
  top: -7px;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    -webkit-appearance: none;
    background: ${({ theme }) => theme.colors.pastel_green};
    border-radius: 50%;
  }
`;

export const Range = styled.div<{
  theme?: Theme;
  minValue: number;
  maxValue: number;
  min: number;
  max: number;
}>`
  position: absolute;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.black};
  top: 50%;
  transform: translateY(-50%);
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background: ${({ theme }) => theme.colors.pastel_green};
    left: ${({ minValue, max }) => `${(minValue / max) * 100}%`};
    right: ${({ maxValue, max }) => `${100 - (maxValue / max) * 100}%`};
  }
`;
