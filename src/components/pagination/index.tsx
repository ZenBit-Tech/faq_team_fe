import React from 'react';
import PaginationRightIcon from 'assets/icons/iconPaginationRight';
import PaginationLeftIcon from 'assets/icons/iconPaginationLeft';
import { PaginationContainer, Arrow, PageNumber } from './styles';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <PaginationContainer>
      <Arrow onClick={() => onPageChange(currentPage - 1)}>
        <PaginationLeftIcon />
      </Arrow>
      {pageNumbers.map(number => (
        <PageNumber
          key={number}
          isActive={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </PageNumber>
      ))}
      <Arrow onClick={() => onPageChange(currentPage + 1)}>
        {' '}
        <PaginationRightIcon />
      </Arrow>
    </PaginationContainer>
  );
};

export default Pagination;
