import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tablist = () => {
  const tabs: string[] = [
    "Overview",
    "Transaction",
    "Accounts",
    "Catogories",
    "Settings",
  ];
  return (
    <Tabs defaultValue={tabs[0]}>
      <TabsList className="flex flex-wrap justify-start gap-x-3">
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.toLocaleLowerCase()}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default Tablist;
