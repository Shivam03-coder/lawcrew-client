import React from 'react'
import {
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  TrendingUp,
  Activity,
} from "lucide-react";

const TrackCards = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
  {/* Stats Cards */}
  <div className="rounded-xl bg-green-100 dark:bg-green-800 p-6 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <div className="rounded-lg bg-green-200 dark:bg-green-700 p-3">
        <DollarSign className="h-6 w-6 text-green-700 dark:text-green-300" />
      </div>
      <span className="flex items-center text-green-700 dark:text-green-300">
        <ArrowUpRight className="h-4 w-4" />
        <span className="ml-1 text-sm">+2.5%</span>
      </span>
    </div>
    <h3 className="mb-1 text-sm text-gray-600 dark:text-gray-300">Total Balance</h3>
    <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">$24,563.00</p>
  </div>

  <div className="rounded-xl bg-red-100 dark:bg-red-800 p-6 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <div className="rounded-lg bg-red-200 dark:bg-red-700 p-3">
        <Activity className="h-6 w-6 text-red-700 dark:text-red-300" />
      </div>
      <span className="flex items-center text-red-700 dark:text-red-300">
        <ArrowDownRight className="h-4 w-4" />
        <span className="ml-1 text-sm">-1.2%</span>
      </span>
    </div>
    <h3 className="mb-1 text-sm text-gray-600 dark:text-gray-300">Monthly Expenses</h3>
    <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">$8,942.00</p>
  </div>

  <div className="rounded-xl bg-blue-100 dark:bg-blue-800 p-6 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <div className="rounded-lg bg-blue-200 dark:bg-blue-700 p-3">
        <TrendingUp className="h-6 w-6 text-blue-700 dark:text-blue-300" />
      </div>
      <span className="flex items-center text-green-700 dark:text-green-300">
        <ArrowUpRight className="h-4 w-4" />
        <span className="ml-1 text-sm">+5.1%</span>
      </span>
    </div>
    <h3 className="mb-1 text-sm text-gray-600 dark:text-gray-300">Investments</h3>
    <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">$12,105.00</p>
  </div>

  <div className="rounded-xl bg-purple-100 dark:bg-purple-800 p-6 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <div className="rounded-lg bg-purple-200 dark:bg-purple-700 p-3">
        <Wallet className="h-6 w-6 text-purple-700 dark:text-purple-300" />
      </div>
      <span className="flex items-center text-green-700 dark:text-green-300">
        <ArrowUpRight className="h-4 w-4" />
        <span className="ml-1 text-sm">+3.7%</span>
      </span>
    </div>
    <h3 className="mb-1 text-sm text-gray-600 dark:text-gray-300">Savings</h3>
    <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">$6,320.00</p>
  </div>
</div>

  )
}

export default TrackCards