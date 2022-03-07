import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currencyNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '864b7693a1msh057fc514bda1679p1c3816jsnd6294024c01d'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: currencyNewsHeaders })

export const currencyNewsApi = createApi({
    reducerPath: 'currencyNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCurrencyNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetcurrencyNewsQuery,
} = currencyNewsApi;