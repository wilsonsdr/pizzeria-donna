import React from "react";
import Experience from "@/components/layout/Experience";
import Promotion from "@/components/layout/Promotion";
import Menu from "@/components/layout/Menu";

export default function Main() {
  return (
    <main className="flex flex-col font-body">
      <Experience />
      <Promotion />
      <Menu />
    </main>
  );
}
