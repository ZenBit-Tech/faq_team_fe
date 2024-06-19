import { apiSlice } from 'redux/apiSlice';
import {
  RequestLogin,
  RequestRegistration,
  ResponseLogin,
  ResponseRegistration,
  RequestNewPass,
  ResponseVerifyOtp,
  RequestVerifyOtp,
  ResponseGetUser,
} from 'redux/types';
import { paths } from 'const/paths';

const AUTH_URL = '/auth';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLogin, RequestLogin>({
      query: data => ({
        url: `${AUTH_URL}${paths.signIn}`,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<ResponseRegistration, RequestRegistration>({
      query: data => ({
        url: `${AUTH_URL}${paths.signUp}`,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: paths.getUser,
      }),
    }),
    getPublicInfo: builder.query<ResponseGetUser, string | undefined>({
      query: id => ({
        url: `${paths.getUser}/user/${id}`,
      }),
    }),

    restorePass: builder.mutation({
      query: data => ({
        url: `${AUTH_URL}${paths.restorePassword}`,
        method: 'POST',
        body: data,
      }),
    }),
    newPass: builder.mutation<void, RequestNewPass>({
      query: data => ({
        url: `${AUTH_URL}${paths.newPassword}`,
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation<ResponseVerifyOtp, RequestVerifyOtp>({
      query: data => ({
        url: `${AUTH_URL}${paths.verifyOtp}`,
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
  useGetPublicInfoQuery,
} = appApiSlice;
