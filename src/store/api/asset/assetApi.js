import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backBaseURL } from '../../../constants';

export const assetApi = createApi({
  reducerPath: 'assets',
  baseQuery: fetchBaseQuery({
    baseUrl: backBaseURL,
  }),
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: () => '/assets',
      keepUnusedDataFor: 0,
    }),
    addAsset: builder.mutation({
      query: (task) => ({
        url: '/asset',
        method: 'POST',
        body: task,
      }),
    }),
    deleteAsset: builder.mutation({
      query: (id) => ({
        url: `/asset/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAssetsQuery, useAddAssetMutation, useDeleteAssetMutation } = assetApi;
