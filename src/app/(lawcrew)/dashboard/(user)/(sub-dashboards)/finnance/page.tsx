"use client";
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
import Tablist from "./tablist";

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
      <div className="mx-auto p-3 w-[98%]">
        <Tablist />
      </div>

      <main className="mx-auto w-[90%] bg-white"></main>
    </div>
  );
}

export default FinnancePage;
