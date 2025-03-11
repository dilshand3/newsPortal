import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../api.js";

export const CategoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => ({
                url: "/categories",
                method: "GET"
            })
        })
    })
})

export const { useGetAllCategoriesQuery } = CategoriesApi;
export default CategoriesApi;