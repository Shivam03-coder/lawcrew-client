"use client";
import React, { useState } from "react";
import {
  Receipt,
  Calendar,
  AlertCircle,
  ArrowUpRight,
  FileText,
  DollarSign,
  PieChart,
  Clock,
  BarChart3,
  Download,
  Upload,
  Filter,
  TrendingUp,
  TrendingDown,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/_taxation/taxation_header";
import TaxationCards from "@/components/_taxation/taxation_cards";
import TaxPaymnetTrend from "@/components/_taxation/tax_payment_trend";
import TaxCompilanceChart from "@/components/_taxation/tax_compilance_chart";
import TaxPaymentSchedule from "@/components/_taxation/tax_payment_schedule";
import TaxationNotice from "@/components/_taxation/taxation_notice";

function App() {
  const upcomingPayments = [
    {
      type: "GST",
      dueDate: "March 31, 2024",
      amount: 12500,
      status: "Pending",
    },
    {
      type: "Income Tax",
      dueDate: "April 15, 2024",
      amount: 25000,
      status: "Upcoming",
    },
    {
      type: "Professional Tax",
      dueDate: "April 30, 2024",
      amount: 2000,
      status: "Upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="mx-auto p-6">
        <TaxationCards />

        <TaxPaymnetTrend />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TaxCompilanceChart />
          <TaxPaymentSchedule />
        </div>

        <TaxationNotice />
      </div>
    </div>
  );
}

export default App;
