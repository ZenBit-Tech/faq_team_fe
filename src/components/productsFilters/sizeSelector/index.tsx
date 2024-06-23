import React from 'react';

import { Container, SizeButton, SizeList } from './style';
import { SizeSelectorProps } from './types';
// TODO sizes should be taken from db
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <Container>
      <SizeList>
        {sizes.map(size => (
          <SizeButton
            key={size}
            selected={size === selectedSize}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </SizeList>
    </Container>
  );
};

export default SizeSelector;
