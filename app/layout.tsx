import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mortgage calculator",
  description:
    "Calculate how much monthly payment and overall repay you will get with your mortgage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} min-h-lvh bg-slate-100 text-slate-900 flex items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
