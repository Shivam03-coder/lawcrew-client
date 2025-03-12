export interface ApiResponse {
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

export interface Account {
  id: string;
  balance: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  name: string;
  isDefault: boolean;
  type: string;
}

export interface AccountResponse extends ApiResponse {
  result: Account[];
}

export interface UpdateDefaultAccountResponse extends ApiResponse {
  result: Account;
}
