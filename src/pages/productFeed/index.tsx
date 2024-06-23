import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAllProductsQuery } from 'redux/productApiSlice.ts';

import ProductsList from 'components/productsList';
import { productCard, showProductsLimit } from 'const/constants.ts';
import {
  AppliedFiltersWrapper,
  FilterSection,
  LoadMoreBtn,
  LoadMoreBtnWrapper,
  ProductFeedContainer,
  ProductsSection,
  SortSelect,
} from 'pages/productFeed/styles.ts';

const productsText = 'products';

const ProductFeed = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { data } = useGetAllProductsQuery({ page, limit: showProductsLimit });

  useEffect(() => {
    const loadProducts = () => {
      try {
        setIsloading(true);
        setProducts([...products, ...data.products]);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg(t('errors.loadError'));
      } finally {
        setIsloading(false);
      }
    };
    loadProducts();
  }, [data, isLoading]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <ProductFeedContainer>
      <FilterSection></FilterSection> {/*TODO put inside filter component*/}
      <ProductsSection>
        <div></div> {/*TODO put inside search input*/}
        <AppliedFiltersWrapper>
          <div>
            <p>
              {data?.totalCount} {productsText}
            </p>
            <ul>
              <li>Filter 1</li>
              <li>Filter 2</li>
              <li>Filter 3</li>
            </ul>
          </div>
          <SortSelect>
            <select name="sort" id="sort">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </SortSelect>
        </AppliedFiltersWrapper>
        <ProductsList
          products={products}
          cardSize={productCard.size.large}
          gapSize={productCard.gap.medium}
        ></ProductsList>
        {errorMsg && <p>{errorMsg}</p>}
        <LoadMoreBtnWrapper>
          <LoadMoreBtn onClick={loadMore}>
            {isLoading ? t('loading.text') : t('loadMore.text')}
          </LoadMoreBtn>
        </LoadMoreBtnWrapper>
      </ProductsSection>
    </ProductFeedContainer>
  );
};

export default ProductFeed;
