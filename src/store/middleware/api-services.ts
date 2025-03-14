import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
  credentials: "include",
});

const ApiServices = createApi({
  reducerPath: "apiservices",
  baseQuery,
  tagTypes: ["ACCOUNTS", "TRANSACTION", "BUDGET"],
  endpoints: (build) => ({}),
});

export default ApiServices;
