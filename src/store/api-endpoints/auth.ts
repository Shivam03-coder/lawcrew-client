import ApiServices from "../middleware/api-services";

const authService = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    // SIGNUP USER

    SignupUser: build.mutation<
      SignupResponse,
      Partial<SignupResponse> & { password: string }
    >({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),

    // LOGIN USER

    LoginUser: build.mutation<ApiResponse, { email: string; password: string }>(
      {
        query: (userData) => ({
          url: "/auth/signin",
          method: "POST",
          body: userData,
        }),
        invalidatesTags: ["user"],
      },
    ),

    // LOGOUT USER
    LogoutUser: build.mutation<ApiResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,useLogoutUserMutation
} = authService;
