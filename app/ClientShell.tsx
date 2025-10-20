// app/ClientShell.tsx
"use client";

import Header from "@/app/sections/Header";
import HashScroll from "./HashScroll";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <HashScroll />{" "}
      {/* ser till att hash-länkar scrollar smooth, även efter route-byten */}
      {children}
    </>
  );
}
