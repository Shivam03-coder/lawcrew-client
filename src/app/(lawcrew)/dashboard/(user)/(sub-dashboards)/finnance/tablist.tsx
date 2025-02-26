import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./over-view";
import Transaction from "./transaction";
import Accounts from "./accounts";

type Tab = {
  title: string;
  component: React.ComponentType;
};

const tabs: Tab[] = [
  { title: "Overview", component: Overview },
  { title: "Transaction", component: Transaction },
  { title: "Accounts", component: Accounts },
];

const Tablist = () => {
  return (
    <Tabs defaultValue={tabs[0]!.title.toLowerCase()} className="w-full">
      {/* Tab Buttons */}
      <TabsList className="flex flex-wrap justify-start gap-x-3">
        {tabs.map(({ title }) => (
          <TabsTrigger key={title} value={title.toLowerCase()}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {tabs.map(({ title, component: Component }) => (
        <TabsContent key={title} value={title.toLowerCase()} className="p-4">
          <Component />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Tablist;
