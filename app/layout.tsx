// app/layout.tsx (server)
import "./globals.css";
import { Inter } from "next/font/google";
import ClientShell from "./ClientShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Reflect",
  description:
    "Portfolio and blog by Adrian Rydin – Frontend developer passionate about React, Next.js and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
