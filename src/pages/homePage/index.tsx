import { ChangeEvent, useEffect, useState } from 'react';
import { ESort } from 'enums/sortEnum';
import { useGetProductsQuery } from 'redux/productsApiSlice';

import Filter from 'components/productsFilters';
import SearchInput from 'components/searchInput';

import { HomeSection } from './styles';
/// TODO should be moved to product page
const minRange = 0;
const maxRange = 10000;

const HomePage = () => {
  const [priceRange, setPriceRange] = useState([minRange, maxRange]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(5);
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [order, setOrder] = useState<ESort.ASC | ESort.DESC>(ESort.ASC);
  const { data } = useGetProductsQuery({
    search: debouncedSearch,
    min: priceRange[0],
    max: priceRange[1],
    color: selectedColor!,
    size: selectedSize!,
    style: selectedStyle!,
    page: currentPage,
    limit: limit,
    order,
  });
  const products = data?.products ?? [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSortChange = () => {
    setOrder(order === ESort.ASC ? ESort.DESC : ESort.ASC);
  };

  return (
    <HomeSection>
      <div className="flex-container">
        <div className="left">
          <Filter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </div>
        <div className="right">
          <SearchInput
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          <div className="sorting">
            {selectedColor} {selectedSize} {selectedStyle}
            <button onClick={handleSortChange} className="sort-btn">
              sort
              {order}
            </button>
          </div>
          <div className="products">
            {products.map(product => (
              <div key={product.id}>
                <div>{product.product_name}</div>
              </div>
            ))}
          </div>
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      </div>
    </HomeSection>
  );
};

export default HomePage;
