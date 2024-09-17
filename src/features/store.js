import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./mode";

export const store = configureStore({
    reducer : {
       tasks : tasksReducer,
    }
})