import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const currencyConverterApiHeaders = {
  "fixerio-host": "coinranking1.p.rapidapi.com",
  "fixerio-key": "864b7693a1msh057fc514bda1679p1c3816jsnd6294024c01d",
};

const baseUrl = "http://data.fixer.io/api";
const fixerKey = "0451ed160b2db25cfdc7a7a1df11c43c";

const createRequest = (url) => ({url});
// const createRequest = (url) => ({ url, headers: currencyApiHeaders });

export const currencyConverterApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrenciesConverter: builder.query({
      query: (fixer) => createRequest(`/latest?access_key=0451ed160b2db25cfdc7a7a1df11c43c`),
    }),
  }),
});

export const {
  useGetCurrenciesConverterQuery,
} = currencyConverterApi;
