import { configureStore } from '@reduxjs/toolkit';
import { assetApi } from './api/asset/assetApi';
import { locationApi } from './api/location/locationApi';
import { userApi } from './api/user';
import { currentViewSlice } from './currentView';
import { notificationSlice } from './notification/notificationSlice';
import { userSlice } from './user';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    currentView: currentViewSlice.reducer,
    notification: notificationSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [assetApi.reducerPath]: assetApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userApi.middleware)
    .concat(assetApi.middleware)
    .concat(locationApi.middleware),
});
