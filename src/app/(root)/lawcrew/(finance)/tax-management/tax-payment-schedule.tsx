import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const TaxPaymentSchedule = () => {
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
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Payment Schedule</CardTitle>
            <CardDescription>Upcoming and recent payments</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            View Calendar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPayments.map((payment, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`rounded-full p-2 ${
                    payment.status === "Pending"
                      ? "bg-yellow-100"
                      : "bg-blue-100"
                  }`}
                >
                  <Clock
                    className={`h-4 w-4 ${
                      payment.status === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium">{payment.type}</p>
                  <p className="text-muted-foreground text-sm">
                    {payment.dueDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-semibold">
                  ₹{payment.amount.toLocaleString()}
                </p>
                <Button
                  size="sm"
                  className="text-main"
                  variant={payment.status === "Pending" ? "default" : "outline"}
                >
                  {payment.status === "Pending" ? "Pay Now" : "Schedule"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxPaymentSchedule;
