import AgentInput from "@/components/agent-input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-6">
      <p className="text-4xl font-bold tracking-tighter" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        CUA Agent Demo
      </p>
      <AgentInput />
    </div>
  );
}
