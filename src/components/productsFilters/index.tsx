import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ColorSelector from './colorSelector';
import DualRangeSlider from './priceRange';
import SizeSelector from './sizeSelector';
import {
  Actions,
  CheckboxInput,
  CheckboxLabel,
  FilterWrapper,
  Section,
  SectionTitle,
} from './styles';
import StyleSelector from './styleSelector';

const minRange = 0;
const maxRange = 10000;

const Filter: React.FC = () => {
  const [priceRange, setPriceRange] = useState([minRange, maxRange]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showOnlyMySizes, setShowOnlyMySizes] = useState<boolean>(false);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const { t } = useTranslation();
  const handleClear = () => {
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedStyle(null);
    setPriceRange([minRange, maxRange]);
    setShowOnlyMySizes(false);
  };
  const handleApply = () => {
    // TODO add logic to send request with filters
    console.log({
      color: selectedColor,
      size: selectedSize,
      style: selectedStyle,
      price: priceRange,
      checkbox: showOnlyMySizes,
    });
  };

  return (
    <FilterWrapper>
      <Section>
        <SectionTitle>{t('productsFilter.price')}</SectionTitle>
        <DualRangeSlider
          min={minRange}
          max={maxRange}
          minValue={priceRange[0]}
          maxValue={priceRange[1]}
          onChange={(min, max) => setPriceRange([min, max])}
        />
        <div className="price-range">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </Section>
      <Section>
        <SectionTitle>{t('productsFilter.color')}</SectionTitle>
        <span>{selectedColor}</span>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </Section>
      <Section>
        <SectionTitle>{t('productsFilter.size')}</SectionTitle>
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={showOnlyMySizes}
            onChange={e => setShowOnlyMySizes(e.target.checked)}
          />
          {t('productsFilter.checkbox')}
        </CheckboxLabel>
      </Section>
      <Section>
        <SectionTitle>{t('productsFilter.style')}</SectionTitle>
        <StyleSelector
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />
      </Section>
      <Actions>
        <button type="button" onClick={handleApply}>
          {' '}
          {t('productsFilter.apply')}
        </button>
        <button type="button" onClick={handleClear}>
          {t('productsFilter.clear')}
        </button>
      </Actions>
    </FilterWrapper>
  );
};

export default Filter;
