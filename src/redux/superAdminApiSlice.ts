import { apiEndpoints } from 'const/apiEndpoints';
import { apiSlice } from 'redux/apiSlice';

import {
  RequestGetUsersWithFilters,
  ResponseGetUsersWithFilters,
} from './types';

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<
      ResponseGetUsersWithFilters,
      RequestGetUsersWithFilters
    >({
      query: ({ page, limit, search, order }) => ({
        url: `${apiEndpoints.getAllUsers}?page=${page}&limit=${limit}&search=${search}&order=${order}`,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = adminApiSlice;
