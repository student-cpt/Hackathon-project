import { configureStore } from "@reduxjs/toolkit";
import store_functions from "./store_functions";

export const store = configureStore({
    reducer: store_functions
})