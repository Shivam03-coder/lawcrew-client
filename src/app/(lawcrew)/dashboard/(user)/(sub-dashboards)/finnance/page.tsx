"use client"
import React from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  PieChart,
  ArrowRight,
  Bell,
  Search,
  User,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expenses: 2400, balance: 2400 },
  { name: "Feb", income: 3000, expenses: 1398, balance: 2100 },
  { name: "Mar", income: 2000, expenses: 9800, balance: 2290 },
  { name: "Apr", income: 2780, expenses: 3908, balance: 2000 },
  { name: "May", income: 1890, expenses: 4800, balance: 2181 },
  { name: "Jun", income: 2390, expenses: 3800, balance: 2500 },
];

const transactions = [
  {
    id: 1,
    name: "Netflix Subscription",
    amount: -14.99,
    date: "2025-03-15",
    category: "Entertainment",
    type: "expense",
  },
  {
    id: 2,
    name: "Salary Deposit",
    amount: 5000.0,
    date: "2025-03-14",
    category: "Income",
    type: "income",
  },
  {
    id: 3,
    name: "Grocery Shopping",
    amount: -156.32,
    date: "2025-03-13",
    category: "Food",
    type: "expense",
  },
  {
    id: 4,
    name: "Freelance Payment",
    amount: 850.0,
    date: "2025-03-12",
    category: "Income",
    type: "income",
  },
  {
    id: 5,
    name: "Electric Bill",
    amount: -95.4,
    date: "2025-03-11",
    category: "Utilities",
    type: "expense",
  },
];

function FinnancePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">FinTrack</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Overview Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-green-100 p-2">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                12.5%
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Total Balance</h3>
            <p className="text-2xl font-bold text-gray-900">$24,563.00</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-blue-100 p-2">
                <ArrowUpRight className="h-6 w-6 text-blue-600" />
              </div>
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                8.2%
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Income</h3>
            <p className="text-2xl font-bold text-gray-900">$8,350.00</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-red-100 p-2">
                <ArrowDownRight className="h-6 w-6 text-red-600" />
              </div>
              <span className="flex items-center text-red-600">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                5.1%
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Expenses</h3>
            <p className="text-2xl font-bold text-gray-900">$3,260.00</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-purple-100 p-2">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <span className="flex items-center text-purple-600">
                <PieChart className="mr-1 h-4 w-4" />
                Active
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Investments</h3>
            <p className="text-2xl font-bold text-gray-900">$12,953.00</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Income vs Expenses
              </h2>
              <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#3B82F6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#EF4444"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Balance Overview
              </h2>
              <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>This month</option>
                <option>Last month</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="balance"
                    stroke="#8B5CF6"
                    fill="#C4B5FD"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-xl bg-white shadow-sm">
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Transactions
              </h2>
              <button className="flex items-center font-medium text-blue-600 hover:text-blue-700">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm font-medium text-gray-500">
                    <th className="pb-4">Transaction</th>
                    <th className="pb-4">Category</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <div
                            className={`rounded-lg p-2 ${
                              transaction.type === "income"
                                ? "bg-green-100"
                                : "bg-red-100"
                            }`}
                          >
                            {transaction.type === "income" ? (
                              <ArrowUpRight
                                className={`h-4 w-4 ${
                                  transaction.type === "income"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              />
                            ) : (
                              <ArrowDownRight
                                className={`h-4 w-4 ${
                                  transaction.type === "income"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              />
                            )}
                          </div>
                          <span className="ml-3 font-medium text-gray-900">
                            {transaction.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {transaction.category}
                        </span>
                      </td>
                      <td className="py-4 text-gray-500">{transaction.date}</td>
                      <td
                        className={`py-4 text-right font-medium ${
                          transaction.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FinnancePage;
