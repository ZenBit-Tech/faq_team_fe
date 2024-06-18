import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import AddToCartIcon from 'assets/icons/addToCartIcon.tsx';
import {
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  VendorName,
} from 'components/productCard/styles.ts';
import Carousel from 'components/carousel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductCard = ({ imageUrl }) => {
  return (
    <li>
      <ProductImageWrapper>
        <Carousel />
      </ProductImageWrapper>
      <ProductName>Product Name</ProductName>
      <ProductInfo>
        <div>
          <ProductPrice>$ 213,99</ProductPrice>
          <VendorName>Vendor Name</VendorName>
        </div>
        <div>
          <AddToCartIcon></AddToCartIcon>
        </div>
      </ProductInfo>
    </li>
  );
};

export default ProductCard;
