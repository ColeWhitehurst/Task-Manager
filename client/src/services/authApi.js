import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = 'http://localhost:3000/api/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (user) => ({
        url: '/register',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;