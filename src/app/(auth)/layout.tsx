import LawCrewCampaignCard from "./law-crew-campaign";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh bg-[#b0c3ff] lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <LawCrewCampaignCard />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">{children}</div>
    </div>
  );
}
