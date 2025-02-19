import { Switch } from "@/components/ui/switch";
import PlanCards from "./_plancards";
import { Titlebar } from "@/components/naviagtion_bar";

const Upgradeplans = () => {
  return (
    <div className="page">
      <Titlebar title="Subcriptions" />
      <div className="pl-2 lg:max-w-full xl:pl-[4.0625rem]">
        <div className="inline-flex h-[11.375rem] w-full flex-col items-center justify-start gap-4">
          <div className="flex min-h-[8.875rem] flex-col items-center justify-start gap-2">
            <div className="flex h-[104px] flex-col items-center justify-start gap-4 self-stretch">
              <div className="inline-flex items-start justify-start mix-blend-multiply">
                <div className="flex items-center justify-center rounded-2xl bg-secondary px-3 py-1">
                  <div className="text-center font-inter text-sm font-medium leading-tight text-primary">
                    Pricing plans
                  </div>
                </div>
              </div>
              <div className="self-stretch text-center font-inter text-5xl font-semibold leading-[3.75rem] text-primary">
                Plans for all sizes
              </div>
            </div>
            <div className="self-stretch py-5 text-center font-inter text-xl font-normal leading-[1.875rem] text-primary">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-3">
            <div className="flex h-6 w-11 items-center justify-end rounded-xl p-0.5">
              <Switch />
            </div>
            <div className="font-inter text-base font-medium leading-normal text-primary">
              Annual pricing (save 20%)
            </div>
          </div>
        </div>
        {/* Upgrade cards */}
        <PlanCards />
      </div>
    </div>
  );
};

export default Upgradeplans;
