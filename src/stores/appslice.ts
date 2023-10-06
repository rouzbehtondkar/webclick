import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:4000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "posts",
    }),
  }),
});
export const { useGetAllProductsQuery } = productsApi;
