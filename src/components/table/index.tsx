import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TrashIcon from 'assets/icons/iconTrash';
import ViewIcon from 'assets/icons/iconView';
import Pagination from 'components/pagination';
import SearchInput from 'components/searchInput';
import TableSort from 'components/tableSort';
import { paths } from 'const/paths';
import { ESort } from 'enums/sortEnum';
import { formatDate } from 'helpers/dateHelper';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from 'redux/superAdminApiSlice';

import {
  ActionBtn,
  Inner,
  Table,
  TableContainer,
  Tbody,
  Td,
  TdInner,
  Th,
  Thead,
} from './styles';

const delay = 500;
// TODO add delete modal

export const TableComponent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [limit] = useState<number>(5);
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [order, setOrder] = useState<ESort.ASC | ESort.DESC>(ESort.ASC);
  const [deleteUser] = useDeleteUserMutation();
  const { data, isLoading } = useGetUsersQuery({
    page: currentPage,
    limit,
    search: debouncedSearch,
    order,
  });

  useEffect(() => {
    const handleSetPages = () => {
      if (data) {
        const totalPageCount = Math.ceil(data.totalCount / limit);
        setTotalPages(totalPageCount);
      }
    };
    handleSetPages();
  }, [data, limit]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages!) return;
    setCurrentPage(newPage);
  };

  const handleSortChange = () => {
    setOrder(order === ESort.ASC ? ESort.DESC : ESort.ASC);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const deleteHandler = async (id: string) => {
    try {
      await deleteUser(id);
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setError(errMsg);
      } else if (isErrorWithMessage(err)) {
        setError(err.message);
      }
    }
  };
  return (
    <Inner>
      <TableSort onClickHandler={handleSortChange} />
      <SearchInput
        placeholder="Search"
        onChange={handleSearchChange}
        value={search}
      />
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>{t('table.name')}</Th>
              <Th>{t('table.email')}</Th>
              <Th>{t('table.address')}</Th>
              <Th>{t('table.date')}</Th>
              <Th>{t('table.action')}</Th>
            </tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <div>{t('loading.text')}</div>
            ) : (
              <>
                {data?.users?.map(row => (
                  <tr key={row.id}>
                    <Td>
                      <TdInner>{row.full_name}</TdInner>
                    </Td>
                    <Td>
                      <TdInner>{row.email}</TdInner>
                    </Td>
                    <Td>
                      <TdInner>
                        {row.address} {row.city} {row.country}
                      </TdInner>
                    </Td>
                    <Td>
                      <TdInner>{formatDate(row.created_at)}</TdInner>
                    </Td>
                    <Td>
                      <TdInner>
                        <ActionBtn
                          onClick={() =>
                            navigate(`${paths.viewUserProfile}${row.id}`)
                          }
                        >
                          <ViewIcon />
                        </ActionBtn>
                        <ActionBtn onClick={() => deleteHandler(row.id)}>
                          <TrashIcon />
                        </ActionBtn>
                      </TdInner>
                    </Td>
                  </tr>
                ))}
              </>
            )}
          </Tbody>
        </Table>
        {error ? <div>{error}</div> : null}
      </TableContainer>
      {totalPages ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </Inner>
  );
};
