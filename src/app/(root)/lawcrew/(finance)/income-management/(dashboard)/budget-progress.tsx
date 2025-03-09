"use client";
import { useGetAccountQuery } from "@/store/api-endpoints/finance";
import React from "react";
const BudgetProgerss = () => {
  const { data, isLoading, isError } = useGetAccountQuery(null);
  console.log("🚀 ~ BudgetProgerss ~ data:", data)

  if (isLoading) return <div>Loading...</div>;
  return <div>BudgetProgerss</div>;
};

export default BudgetProgerss;
