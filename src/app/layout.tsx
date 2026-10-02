import type {Metadata} from "next";
import localFont from "next/font/local";

import "@/app/globals.css";

const iranSans = localFont({
  src: "../../public/font/IRANSansWeb_FaNum.woff2",
  variable: "--font-iran-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lifelands",
  description: "Lifelands Game Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${iranSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
