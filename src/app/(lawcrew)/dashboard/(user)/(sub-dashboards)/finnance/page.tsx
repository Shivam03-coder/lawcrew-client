"use client";
import React from "react";
import {
  BarChart3,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  CreditCard,
  TrendingUp,
  PieChart,
  Activity,
  Calendar,
  Bell,
  User,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";

import AccountDataTable from "./account-data-table";
import TransactionTable from "./transaction";
import {
  ExpenseCharts,
  InvestmentDistributionChart,
  SavingsChart,
} from "./charts";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Stats Cards */}
            <div className="rounded-xl bg-green-200 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-green-100 p-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <span className="flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1 text-sm">+2.5%</span>
                </span>
              </div>
              <h3 className="mb-1 text-sm text-gray-600">Total Balance</h3>
              <p className="text-2xl font-bold text-gray-800">$24,563.00</p>
            </div>

            <div className="rounded-xl bg-red-200 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-red-100 p-3">
                  <Activity className="h-6 w-6 text-red-600" />
                </div>
                <span className="flex items-center text-red-600">
                  <ArrowDownRight className="h-4 w-4" />
                  <span className="ml-1 text-sm">-1.2%</span>
                </span>
              </div>
              <h3 className="mb-1 text-sm text-gray-600">Monthly Expenses</h3>
              <p className="text-2xl font-bold text-gray-800">$8,942.00</p>
            </div>

            <div className="rounded-xl bg-blue-200 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-blue-100 p-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <span className="flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1 text-sm">+5.1%</span>
                </span>
              </div>
              <h3 className="mb-1 text-sm text-gray-600">Investments</h3>
              <p className="text-2xl font-bold text-gray-800">$12,105.00</p>
            </div>

            <div className="rounded-xl bg-purple-200 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-purple-100 p-3">
                  <Wallet className="h-6 w-6 text-purple-600" />
                </div>
                <span className="flex items-center text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1 text-sm">+3.7%</span>
                </span>
              </div>
              <h3 className="mb-1 text-sm text-gray-600">Savings</h3>
              <p className="text-2xl font-bold text-gray-800">$6,320.00</p>
            </div>
          </div>

          {/* Recent Transactions */}

          {/* Upcoming Bills */}
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Expenses Chart */}
            <ExpenseCharts />
            {/* Investment Distribution */}
            <InvestmentDistributionChart />
            {/* Accounts Table */}
            <AccountDataTable className="col-span-full" />
            {/* Savings Trend */}
            <SavingsChart />
          </div>
          <TransactionTable />
        </main>
      </div>
    </div>
  );
}

export default App;
