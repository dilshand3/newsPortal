import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../api";

export const TrendingNews = createApi({
    reducerPath: "TrendingNews",
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        AllTrendingNews: builder.query({
            query: () => ({
                url: "/trending_topics/alltrendingtopics"
            })
        })
    })
});

export const { useAllTrendingNewsQuery } = TrendingNews;
export default TrendingNews;