import { configureStore } from "@reduxjs/toolkit";
import { NewsApi } from "../Api/NewsApi.js";
import { CategoriesApi } from "../Api/CategoriesApi.js";
import TrendingNews from "../Api/TrendingNews.js";

const store = configureStore({
    reducer: {
        [NewsApi.reducerPath]: NewsApi.reducer,
        [CategoriesApi.reducerPath]: CategoriesApi.reducer,
        [TrendingNews.reducerPath] : TrendingNews.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            NewsApi.middleware,
            CategoriesApi.middleware,
            TrendingNews.middleware
        ),
});

export default store;
