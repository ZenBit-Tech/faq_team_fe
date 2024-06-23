import { useEffect, useState } from 'react';

import ProductsList from 'components/productsList';
import { productCard } from 'const/constants.ts';
import {
  AppliedFiltersWrapper,
  FilterSection,
  ProductFeedContainer,
  ProductsSection,
  SortSelect,
} from 'pages/productFeed/styles.ts';

import { useGetAllProductsQuery } from '../../redux/productApiSlice.ts';

const ProductFeed = () => {
  // const {data} = useGetAllProductsQuery({});

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const limit = 10;
  const { data } = useGetAllProductsQuery({ page, limit });

  useEffect(() => {
    const loadProducts = () => {
      try {
        setIsloading(true);
        setProducts([...products, ...data.products]);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      }
    };
    loadProducts();
  }, [data]);

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
            <p>Total Products</p>
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
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="load-more">
          <button onClick={loadMore} className="btn-grad">
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </ProductsSection>
    </ProductFeedContainer>
  );
};

export default ProductFeed;
