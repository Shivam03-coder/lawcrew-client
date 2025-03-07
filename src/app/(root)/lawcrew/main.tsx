"use client";
import React from "react";
import { Scale, Briefcase, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Main() {
  const services = [
    {
      title: "Legal Services",
      icon: <Briefcase className="h-12 w-12 text-indigo-600" />,
      description: "Expert legal solutions for all your needs",
      features: [
        "Legal Consultation",
        "Document Review",
        "Contract Drafting",
        "Legal Representation",
      ],
      path: "/legal",
    },
    {
      title: "Financial Services",
      icon: <Scale className="h-12 w-12 text-emerald-600" />,
      description: "Comprehensive financial planning and advisory",
      features: [
        "Financial Planning",
        "Investment Advisory",
        "Tax Consultation",
        "Wealth Management",
      ],
      path: "/lawcrew/finance",
    },
  ];

  const handleServiceClick = (path: string) => {
    console.log(`Navigating to ${path}`);
    // Navigation logic will go here
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-lexend text-4xl font-normal textDark ">
          Welcome to LawCrew
        </h1>
        <p className="mt-2 text-xl text-gray-600 dark:text-slate-300 font-manrope">
          Choose your service to get started
        </p>
      </div>

      <div className="mt-10 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.title}
            className="cursor-pointer card border-none shadow-none transition-all duration-300 hover:shadow-xl"
            onClick={() => handleServiceClick(service.path)}
          >
            <CardHeader className="flex flex-col items-center text-center">
              <div className="dark:bg-gray-800 p-3 rounded ">{service.icon}</div>
              <CardTitle className="mt-4 text-2xl font-normal textDark font-lexend">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p className="mb-4 text-center">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 transition-all duration-300 hover:translate-x-4"
                  >
                    <ChevronRight className="font-extrabold text-indigo-500" />
                    <span className="textDark font-lexend">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href={service.path} className="mt-6 flex justify-center">
                <Button className="bg-indigo-600 font-medium text-white hover:bg-indigo-700">
                  Click to explore
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Main;
