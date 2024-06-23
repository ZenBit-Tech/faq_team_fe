import { apiSlice } from 'redux/apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: data => ({
        url: `/products/get-products?page=${data.page}&limit=${data.limit}`,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApiSlice;
