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
const ProductCard = ({ product }) => {
  return (
    <li>
      <ProductImageWrapper>
        <Carousel />
      </ProductImageWrapper>
      <ProductName>{product.product_name}</ProductName>{' '}
      {/*TODO change to fetched data*/}
      <ProductInfo>
        <div>
          <ProductPrice>$ {product.price}</ProductPrice>
          <VendorName>{product.owner.full_name}</VendorName>
        </div>
        <div>
          <AddToCartIcon></AddToCartIcon>
        </div>
      </ProductInfo>
    </li>
  );
};

export default ProductCard;
