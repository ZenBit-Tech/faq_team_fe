/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from 'redux/productsApiSlice.ts';

import Filter from 'components/productsFilters';
import ProductsList from 'components/productsList';
import SearchInput from 'components/searchInput';
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

import { ESort } from '../../enums/sortEnum.ts';

const productsText = 'products';

const ProductFeed = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [order, setOrder] = useState<ESort.ASC | ESort.DESC>(ESort.ASC);
  const { data } = useGetProductsQuery({
    search: debouncedSearch,
    page,
    limit: showProductsLimit,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setProducts([]);
    };
  }, [search]);

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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <ProductFeedContainer>
      <FilterSection>
        <Filter />
      </FilterSection>
      <ProductsSection>
        <SearchInput
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
        <AppliedFiltersWrapper>
          <div>
            <p>
              {data?.totalCount} {productsText}
            </p>
            <ul></ul>
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
