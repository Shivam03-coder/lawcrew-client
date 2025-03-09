"use client";
import React from "react";

import AccountDataTable from "./account-data-table";
import TransactionTable from "./transaction";
import {
  ExpenseCharts,
  InvestmentDistributionChart,
  SavingsChart,
} from "./charts";
import TrackCards from "./track-cards";

function FinanceDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 dark:bg-gray-800">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <TrackCards />
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

export default FinanceDashboard;
