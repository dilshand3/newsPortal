import { configureStore } from "@reduxjs/toolkit";
import  { NewsApi } from "../Api/NewsApi";

const store = configureStore({
    reducer: {
        [NewsApi.reducerPath]: NewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(NewsApi.middleware),
});

export default store;
