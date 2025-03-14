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

export interface AccountTransActionResponse extends ApiResponse {
  result: AccountResult;
}

export interface AccountResult {
  id: string;
  userId: string;
  name: string;
  type: "SAVINGS" | "CURRENT";
  balance: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  transactions: Transaction[];
  _count: {
    transactions: number;
  };
}

export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  type: 'INCOME' | 'TRANSFER';
  amount: string;
  description: string;
  date: string;
  category: string;
  receiptUrl: string;
  isRecurring: boolean;
  recurringInterval: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | null;
  nextRecurringDate: string | null;
  lastProcessed: string | null;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
}

