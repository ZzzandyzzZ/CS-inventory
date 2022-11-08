import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backBaseURL } from '../../../constants';

export const userApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: backBaseURL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
