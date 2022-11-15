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
    }),
    addAsset: builder.mutation({
      query: (task) => ({
        url: '/asset',
        method: 'POST',
        body: task,
      }),
    }),
  }),
});

export const { useGetAssetsQuery, useAddAssetMutation } = assetApi;
