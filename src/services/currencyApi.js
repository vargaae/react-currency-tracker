import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const currencyApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "864b7693a1msh057fc514bda1679p1c3816jsnd6294024c01d",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: currencyApiHeaders });

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrencies: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCurrencyDetails: builder.query({
      query: (currencyId) => createRequest(`/coin/${currencyId}`),
    }),
    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCurrencyHistory: builder.query({
      query: ({ currencyId, timePeriod }) =>
        createRequest(`/coin/${currencyId}/history?timeperiod=7d`),
        // createRequest(`/coin/${currencyId}/history?timeperiod=${timePeriod}`),
    }),
    
    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCurrenciesQuery,
  useGetCurrencyDetailsQuery,
  useGetCurrencyHistoryQuery,
  useGetExchangesQuery,
} = currencyApi;
