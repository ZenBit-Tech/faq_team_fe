import { apiSlice } from './apiSlice';
import {
  RequestLogin,
  RequestRegistration,
  ResponseLogin,
  ResponseRegistration,
  RequestNewPass,
  ResponseVerifyOtp,
  RequestVerifyOtp,
} from './types';
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
    newPass: builder.mutation<void, RequestNewPass>({
      query: data => ({
        url: `${USER_URL}/set-new-pass`,
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation<ResponseVerifyOtp, RequestVerifyOtp>({
      query: data => ({
        url: `${USER_URL}/verify-otp`,
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
  useNewPassMutation,
  useVerifyOtpMutation,
} = appApiSlice;
