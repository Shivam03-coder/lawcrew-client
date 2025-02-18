import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const Managenotificationfrom = () => {
  return (
    <form>
      {/* Browser Notifications */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-5 padding">
        <div className="font-inter text-base font-normal text-primary">
          Browser Notifications
        </div>
        {/* All Activity */}
        <div className="flex w-full items-start justify-start gap-3">
          <Checkbox className="rounded-full border-2 border-primary text-primary focus:ring-primary" />
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="text-center text-sm font-medium text-primary">
              All activity
            </div>
            <div className="text-sm text-primary">
              You’re assigned a task, added as a collaborator, something you
              follow is updated, or you are @mentioned
            </div>
          </div>
        </div>

        {/* Mentions */}
        <div className="flex w-full items-start justify-start gap-3">
          <Checkbox className="rounded-full border-2 border-primary text-primary focus:ring-[#001F3F]" />
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="text-center text-sm font-medium text-primary">
              Mentions
            </div>
            <div className="text-sm text-primary">
              Only when you are @mentioned
            </div>
          </div>
        </div>

        {/* Nothing */}
        <div className="flex w-full items-start justify-start gap-3">
          <Checkbox className="rounded-full border-2 border-primary text-primary focus:ring-[#001F3F]" />
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="text-center text-sm font-medium text-primary">
              Nothing
            </div>
            <div className="text-sm text-primary">No email notifications</div>
          </div>
        </div>
          </div>
          
      {/* Project Notifications */}
      <div className="flex h-[17.375rem] flex-col items-start justify-start gap-5 padding">
        <div className="inline-flex items-start justify-start gap-1">
          <div className="font-inter text-base font-normal text-primary">
            Project Notifications
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="w-[392px] font-inter text-xs font-medium text-primary">
            Customise what notifications you receive in your browser
          </div>
          <div className="flex h-56 flex-col items-start justify-start gap-5 border-t border-secondary px-1 py-5">
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
            <div className="mt-3 flex items-center space-x-2">
                <Switch className="border-primary" id="Tasks added" />
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-primary">
                  Status updates
                </div>
                <div className="self-stretch font-inter text-sm font-normal leading-tight text-primary">
                  Receive Notification about task or project status updates
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
            <div className="mt-3 flex items-center space-x-2">
                <Switch className="border-primary" id="Tasks added" />
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-primary">
                  Messages
                </div>
                <div className="self-stretch font-inter text-sm font-normal leading-tight text-primary">
                  Receive Notification about new messages
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
              <div className="mt-3 flex items-center space-x-2">
                <Switch className="border-primary" id="Tasks added" />
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-primary">
                  Tasks added
                </div>
                <div className="self-stretch font-inter text-sm font-normal leading-tight text-primary">
                  Receive Notification about new tasks is added{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Managenotificationfrom;
