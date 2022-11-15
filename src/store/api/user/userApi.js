import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backBaseURL } from '../../../constants';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: backBaseURL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    addUser: builder.mutation({
      query: (task) => ({
        url: '/user',
        method: 'POST',
        body: task,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = userApi;
