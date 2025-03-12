import ApiServices from "../middleware/api-services";

const financeServices = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    CreateAccount: build.mutation({
      query: (payload) => ({
        url: "/finance/accounts",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateAccountMutation } = financeServices;
