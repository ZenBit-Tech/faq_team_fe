import { apiSlice } from 'redux/apiSlice';
import {
  RequestLogin,
  RequestRegistration,
  ResponseLogin,
  ResponseRegistration,
  RequestNewPass,
  ResponseVerifyOtp,
  RequestVerifyOtp,
} from 'redux/types';
import * as paths from 'const/paths';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLogin, RequestLogin>({
      query: data => ({
        url: paths.signIn,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<ResponseRegistration, RequestRegistration>({
      query: data => ({
        url: paths.signUp,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: paths.getUser,
      }),
    }),
    restorePass: builder.mutation({
      query: data => ({
        url: paths.restorePassword,
        method: 'POST',
        body: data,
      }),
    }),
    newPass: builder.mutation<void, RequestNewPass>({
      query: data => ({
        url: paths.newPassword,
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation<ResponseVerifyOtp, RequestVerifyOtp>({
      query: data => ({
        url: paths.verifyOtp,
        method: 'POST',
        body: data,
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
  useNewPassMutation,
  useVerifyOtpMutation,
} = appApiSlice;

