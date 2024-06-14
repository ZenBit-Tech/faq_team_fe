import { apiSlice } from 'redux/apiSlice';
import {
  RequestLogin,
  RequestRegistration,
  RequestUpdateUser,
  ResponseGetUser,
  ResponseLogin,
  ResponseRegistration,
  RequestNewPass,
  ResponseVerifyOtp,
  RequestVerifyOtp,
} from 'redux/types';
import { paths } from 'const/paths';
const AUTH_URL = 'authorization';
const USER_UPDATE_URL = 'users/update';
const FIND_USER_URL = 'users/user';

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

    findUser: builder.mutation<ResponseGetUser, { token: string }>({
      query: data => ({
        url: `${FIND_USER_URL}`,
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
    update: builder.mutation<void, { id: string; data: RequestUpdateUser }>({
      query: ({ id, data }) => ({
        url: `${USER_UPDATE_URL}/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useRestorePassMutation,
  useFindUserMutation,
  useUpdateMutation,
  useGetUserQuery,
  useNewPassMutation,
  useVerifyOtpMutation,
} = appApiSlice;
