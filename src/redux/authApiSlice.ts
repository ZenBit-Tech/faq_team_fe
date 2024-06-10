import { apiSlice } from './apiSlice';
import {
  RequestLogin,
  RequestRegistration,
  RequestUpdateUser,
  ResponseGetUser,
  ResponseLogin,
  ResponseRegistration,
} from './types';
const AUTH_URL = 'Authorization';
const USER_URL = 'users';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLogin, RequestLogin>({
      query: data => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<ResponseRegistration, RequestRegistration>({
      query: data => ({
        url: `${AUTH_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.mutation<ResponseGetUser, { token: string }>({
      query: data => ({
        url: `${USER_URL}/user`,
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
    update: builder.mutation<void, { id: string; data: RequestUpdateUser }>({
      query: ({ id, data }) => ({
        url: `${USER_URL}/update/${id}`,
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
  useGetUserMutation,
  useUpdateMutation,
} = appApiSlice;
