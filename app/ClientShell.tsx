// app/ClientShell.tsx
"use client";

import Header from "@/app/sections/Header";
import HashScroll from "./HashScroll";
import { Suspense } from "react";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <HashScroll />{" "}
      </Suspense>

      {children}
    </>
  );
}
