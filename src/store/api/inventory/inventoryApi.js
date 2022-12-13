import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backBaseURL } from '../../../constants';

export const inventoryApi = createApi({
  reducerPath: 'inventories',
  baseQuery: fetchBaseQuery({
    baseUrl: backBaseURL,
  }),
  endpoints: (builder) => ({
    getinventories: builder.query({
      query: () => '/inventories',
      keepUnusedDataFor: 0,
    }),
    addInventory: builder.mutation({
      query: (data) => ({
        url: '/inventory',
        method: 'POST',
        body: data,
      }),
    }),
    deleteInventory: builder.mutation({
      query: (id) => ({
        url: `/inventory/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetinventoriesQuery,
  useAddInventoryMutation,
  useDeleteInventoryMutation,
} = inventoryApi;
