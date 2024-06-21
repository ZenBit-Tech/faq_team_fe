import { useTranslation } from 'react-i18next';

import ProductCard from 'components/productCard';
import { ProductsWrapper } from 'components/productsList/styles.ts';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';

const ProductsList = ({ userProducts }: Partial<PublicProfileInfoType>) => {
  const { t } = useTranslation();

  return (
    <ProductsWrapper>
      <h2>{t('titleText.vendorCloset')}</h2>
      <ul>
        <ProductCard imageUrl={userProducts?.image} />
        <ProductCard imageUrl={userProducts?.image} />
        <ProductCard imageUrl={userProducts?.image} />
        <ProductCard imageUrl={userProducts?.image} />
        <ProductCard imageUrl={userProducts?.image} />
        <ProductCard imageUrl={userProducts?.image} />
      </ul>
    </ProductsWrapper>
  );
};

export default ProductsList;
