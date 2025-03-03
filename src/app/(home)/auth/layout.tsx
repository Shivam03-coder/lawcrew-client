import LawCrewCampaignCard from "./law-crew-campaign";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh card lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <LawCrewCampaignCard />
      </div>
      <div className="flex flex-col md:w-[80%] mx-auto gap-4 p-6 md:p-10">{children}</div>
    </div>
  );
}
