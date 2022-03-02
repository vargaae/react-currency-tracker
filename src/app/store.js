import { configureStore } from '@reduxjs/toolkit';

import { currencyApi } from '../services/currencyApi';
import { currencyConverterApi } from '../services/currencyConverterApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer,
        [currencyConverterApi.reducerPath]: currencyConverterApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(currencyApi.middleware)
    .concat(currencyConverterApi.middleware)
    .concat(cryptoNewsApi.middleware)
})