interface ApiResponse {
  code: number;
  status: "success" | "failed";
  message: string;
}

interface SignupResponse extends ApiResponse {
  result: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}
