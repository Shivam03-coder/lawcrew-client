import { SubNavigationTitlebar } from "@/components/_user/useprofile";
import { Check, ChevronRight, History, Zap } from "lucide-react";
import PaymentHistoryTable from "./_paymnets-sections/paymenthistorytable";

const Paymentandsubscription = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Payments & Subscriptions" />
      <div className="max-w-[32.75rem] space-y-7 pl-6">
        <div className="flex flex-col space-y-7">
          <span className="font-inter text-base font-normal text-primary">
            Current Subscription Plan
          </span>
          <span className="flex items-center space-x-3">
            <History size={23} />
            <h3>Your Next Billing Cycle is on July, 31 2024</h3>
          </span>
        </div>
        <div className="grid w-full grid-cols-1 space-x-11 md:grid-cols-3">
          <div className="flex flex-col  space-y-5 ">
            <div className="flex h-[11.125rem] flex-col items-center justify-start gap-1 space-y-3 md:items-start">
              <div className="flex h-[5.375rem] flex-col items-center justify-start space-y-3 self-stretch md:items-start">
                <div className="rounded-full bg-secondary p-3">
                  <Zap size={32} />
                </div>
                <div className="self-stretch text-center font-inter text-xl font-semibold leading-[1.875rem] text-primary md:text-left">
                  Basic plan
                </div>
              </div>
              <div className="self-stretch font-inter text-5xl font-semibold leading-[3.75rem] text-primary">
                $10/mth
              </div>
              <div className="self-stretch font-inter text-base font-normal leading-normal text-primary">
                Billed annually.
              </div>
              <button className="inline-flex h-14 w-[255px] items-center justify-center gap-2 rounded bg-primary px-5 py-2.5">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                    Upgrade Plan
                  </div>
                  <div className="relative h-5 w-5">
                    <ChevronRight className="absolute left-0 top-0 h-5 w-5 text-[#d9d9d9]" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="col-span-2 h-[13.688rem] gap-5 space-y-4 place-self-center">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-secondary p-1">
                <Check size={24} />
              </div>
              <span>Access to all basic features</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-secondary p-1">
                <Check size={24} />
              </div>
              <span>Access to all basic features</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-secondary p-1">
                <Check size={24} />
              </div>
              <span>Access to all basic features</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-secondary p-1">
                <Check size={24} />
              </div>
              <span>Access to all basic features</span>
            </div>
          </div>
        </div>
        <PaymentHistoryTable />
      </div>
    </div>
  );
};

export default Paymentandsubscription;
