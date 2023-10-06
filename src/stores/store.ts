import { configureStore } from "@reduxjs/toolkit";
import {productsApi} from "./appslice";
const store=configureStore({

    reducer: {
        posts: productsApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
      },
    
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([productsApi.middleware]),
    });
export default  store;