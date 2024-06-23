import ProductCard from 'components/productCard';
import { ProductsWrapper } from 'components/productsList/styles.ts';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';

const ProductsList = ({
  fullName,
  products,
  cardSize,
  gapSize,
}: Partial<PublicProfileInfoType>) => {
  return (
    <ProductsWrapper cardSize={cardSize!} gapSize={gapSize!}>
      <ul>
        {products &&
          products.map(product => (
            <ProductCard
              key={product?.id}
              product={product}
              fullName={fullName || product.owner.full_name}
            />
          ))}
      </ul>
      q
    </ProductsWrapper>
  );
};

export default ProductsList;
