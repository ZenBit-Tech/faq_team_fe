import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

import productDefault from 'assets/images/prductDefault.png';

import '@coreui/coreui/dist/css/coreui.min.css';

const Carousel = () => {
  return (
    <CCarousel indicators transition="crossfade" interval={false}>
      <CCarouselItem>
        <CImage className="d-block w-100" src={productDefault} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={productDefault} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={productDefault} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
