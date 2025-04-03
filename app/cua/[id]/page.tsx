"use client";

import { useAgentInputStore } from "@/lib/stores/agent-input-store";

export default function CuaPage() {
  const { input } = useAgentInputStore();

  return (
    <div className="flex flex-col h-[100vh] ">
      <div className="flex w-full h-10 items-center px-2">
        <p className="text-lg font-semibold tracking-tighter" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          CUA Agent Demo
        </p>
      </div>
      <div className="flex w-full h-full">
        <p>{input}</p>
      </div>
    </div>
  );
}