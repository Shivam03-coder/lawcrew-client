import { SidebarTrigger } from "@/components/ui/sidebar";
import AddTaskBtn from "@/components/add-task-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormModal from "../task_forms/form-dialogs";
import HeaderNavs from "./header_navs";
const AppSidebarHeader = () => {
  return (
    <header className="flex h-16 w-full items-center gap-2 border-b bg-gradient-to-r from-blue-100 to-purple-200 px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="flex w-full items-center justify-between">
        <HeaderNavs />
        <AddTaskBtn />
        <FormModal />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default AppSidebarHeader;
