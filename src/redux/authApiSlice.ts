import {
  RequestLogin,
  RequestRegistration,
  ResponseLogin,
  ResponseRegistration,
} from 'src/redux/types';
import { apiSlice } from './apiSlice';
const USERS_URL = '/api/user';
const CARDS_URL = '/api/cards';
const USER_URL = 'users';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLogin, RequestLogin>({
      query: data => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<ResponseRegistration, RequestRegistration>({
      query: data => ({
        url: `${USERS_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `${CARDS_URL}`,
      }),
    }),
    restorePass: builder.mutation({
      query: data => ({
        url: `${USER_URL}/user/send-otp`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useRestorePassMutation,
  useGetUserQuery,
} = appApiSlice;
