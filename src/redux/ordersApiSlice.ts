import { apiSlice } from 'redux/apiSlice';

import { apiEndpoints } from 'const/apiEndpoints';

import {
  AverageSales,
  RecentSales,
  SalesPerCategory,
  SalesPerMonth,
} from './types';

const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTotalSales: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getTotalSales}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getAverageSales: builder.query<AverageSales, string>({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getAverageSales}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getNumberOfOrders: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getNumberOfOrders}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getTotalSalesPerMonth: builder.query<SalesPerMonth, string>({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getTotalSalesPerMonth}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getTotalSalesPerCategory: builder.query<SalesPerCategory, string>({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getTotalSalesPerCategory}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getLastOrders: builder.query<RecentSales, string>({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getLastOrders}?userId=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAverageSalesQuery,
  useGetLastOrdersQuery,
  useGetNumberOfOrdersQuery,
  useGetTotalSalesPerCategoryQuery,
  useGetTotalSalesPerMonthQuery,
  useGetTotalSalesQuery,
} = ordersApiSlice;
