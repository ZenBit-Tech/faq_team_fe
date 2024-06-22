import React from 'react';

import check from 'assets/images/color-check.svg';

import { ColorButton, ColorList, Container } from './style';
import { ColorSelectorProps } from './types';

// TODO colors should be taken from db
const colors = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Orange', code: '#FFA500' },
  { name: 'Yellow', code: '#FFD700' },
  { name: 'Green', code: '#008000' },
  { name: 'Blue', code: '#1E90FF' },
  { name: 'Purple', code: '#9370DB' },
  { name: 'Violet', code: '#8A2BE2' },
  { name: 'Black', code: '#000000' },
];

const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <Container>
      <ColorList>
        {colors.map(color => (
          <ColorButton
            key={color.name}
            color={color.code}
            selected={color.name === selectedColor}
            onClick={() => setSelectedColor(color.name)}
          >
            {color.name === selectedColor ? <img src={check} /> : null}
          </ColorButton>
        ))}
      </ColorList>
    </Container>
  );
};

export default ColorSelector;
