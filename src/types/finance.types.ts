export type Account = {
  name: string;
  balance: string;
  type: string;
  isDefault: boolean;
};

export interface TransactionForm {
  type: string;
  amount: string;
  description: string;
  date: Date;
  accountId: string;
  category: string;
  isRecurring: boolean;
  recurringInterval: string;
  budgetId?: string;
}
