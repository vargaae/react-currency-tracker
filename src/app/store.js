import { configureStore } from '@reduxjs/toolkit';

import { currencyApi } from '../services/currencyApi';
import { currencyConverterApi } from '../services/currencyConverterApi';
import { currencyNewsApi } from '../services/currencyNewsApi';

export default configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer,
        [currencyConverterApi.reducerPath]: currencyConverterApi.reducer,
        [currencyNewsApi.reducerPath]: currencyNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(currencyApi.middleware)
    .concat(currencyConverterApi.middleware)
    .concat(currencyNewsApi.middleware)
})