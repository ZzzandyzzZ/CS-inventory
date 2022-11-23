import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backBaseURL } from '../../../constants';

export const locationApi = createApi({
  reducerPath: 'locations',
  baseQuery: fetchBaseQuery({
    baseUrl: backBaseURL,
  }),
  endpoints: (builder) => ({
    getlocations: builder.query({
      query: () => '/locations',
    }),
    addLocation: builder.mutation({
      query: (data) => ({
        url: '/location',
        method: 'POST',
        body: data,
      }),
    }),
    deleteLocation: builder.mutation({
      query: (id) => ({
        url: `/location/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetlocationsQuery,
  useAddLocationMutation,
  useDeleteLocationMutation,
} = locationApi;
