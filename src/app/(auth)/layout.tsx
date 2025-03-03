import LawCrewCampaignCard from "./law-crew-campaign";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh place-items-center bg-secondary dark:bg-gray-900 lg:grid-cols-2">
      <div className="relative hidden place-self-center lg:block">
        <LawCrewCampaignCard />
      </div>
      <div className="mx-auto center flex-col  gap-4 p-6 md:w-[80%] md:p-10">
        {children}
      </div>
    </div>
  );
}
