import AddToCartIcon from 'assets/icons/addToCartIcon.tsx';
import Carousel from 'components/carousel';
import {
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  VendorName,
} from 'components/productCard/styles.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductCard = ({ imageUrl }) => {
  return (
    <li>
      <ProductImageWrapper>
        <Carousel />
      </ProductImageWrapper>
      <ProductName>Product Name</ProductName> {/*TODO change to fetched data*/}
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
