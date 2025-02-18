import { SubNavigationTitlebar } from "@/components/_user/useprofile";

const Accountmanagement = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Account Management" />
      <div className="max-w-[32.75rem] pl-6">
        <div className="flex max-h-max w-full flex-col items-start justify-start gap-3">
          <section>
            <div className="flex items-start justify-start gap-1">
              <div className="font-inter text-base font-normal text-primary">
                Delete Account
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="font-inter text-base font-medium text-primary">
                Deleting your account will loose all your data, progress, files
                and team projects.
              </div>
              <div className="flex h-10 items-center justify-center gap-2 rounded py-2.5">
                <button className="flex items-center justify-center gap-1">
                  <div className="text-center font-inter text-sm font-medium leading-tight text-[#d04545] underline">
                    Delete Account
                  </div>
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-start justify-start gap-1">
              <div className="font-inter text-base font-normal text-primary">
                Deactivate Account
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="font-inter text-base font-medium text-primary">
                You can deactivate your account for 28 days, can signin again to
                the same account whenever you can!
              </div>
              <div className="flex h-10 items-center justify-center gap-2 rounded py-2.5">
                <button className="flex items-center justify-center gap-1">
                  <div className="text-center font-inter text-sm font-medium leading-tight text-[#d04545] underline">
                    Deactivate Account
                  </div>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accountmanagement;
