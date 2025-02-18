import React from "react";
import Header from "@/components/_home/app-header";
import Hero from "../../components/_home/hero";
import Footer from "../../components/_home/footer";
import Payment from "../../components/_home/payment";
import Solution from "@/components/_home/solution";
import CustomerReview from "@/components/_home/customer-review";
import Goal from "@/components/_home/goals";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Main Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <Hero />
        <Solution />
        <Goal />
        <CustomerReview />
        <Payment />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
