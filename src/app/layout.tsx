import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppProvider from "@/components/providers/app-providers";

export const metadata: Metadata = {
  title: "BLUE-BIRD",
  description: "A PROJECT MANAGEMENT SOFTWARE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={appfonts}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
