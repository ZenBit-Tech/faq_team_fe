export type PaginationProps = {
  currentPage: number;
  totalPages: number | null;
  onPageChange: (page: number) => void;
};
