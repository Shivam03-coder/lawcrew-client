import ApiServices from "../middleware/api-services";

const financeServices = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    GetAccount: build.query({
      query: () => ({
        url: "/account/create",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAccountQuery } = financeServices;
