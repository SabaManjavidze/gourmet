"use client";

import { useMenu } from "@/hooks/useMenu";

export function SumSection() {
  const { totalSum } = useMenu();
  return (
    <div className="flex justify-between bg-[#FED775] px-10 py-2 text-2xl font-bold text-muted-sm">
      <h3>Sum</h3>
      <h3>${totalSum}</h3>
    </div>
  );
}
