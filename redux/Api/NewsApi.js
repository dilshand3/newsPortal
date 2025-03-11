import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../api";

export const NewsApi = createApi({
    reducerPath: "NewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => ({
                url: "/news/getallnews",
                method: "GET"
            })
        }),
        searchNews: builder.query({
            query: (key) => ({
                url: `/news/search/${key}`,
                method: "GET"
            })
        }),
    })
});

export const { useGetAllNewsQuery, useLazySearchNewsQuery, useCategoriesQuery } = NewsApi;
export default NewsApi;