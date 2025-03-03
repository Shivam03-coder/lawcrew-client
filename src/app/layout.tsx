import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppProvider from "@/components/providers/app-providers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "1ST MEDIA LINK",
  description: "A PROJECT MANAGEMENT SOFTWARE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={appfonts}>
      <body>
        <ClerkProvider>
          <AppProvider>{children}</AppProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
