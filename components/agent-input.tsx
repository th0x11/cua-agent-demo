"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, StopCircle } from "lucide-react";
import { GrEmergency } from "react-icons/gr";
import { useAgentInputStore } from "@/lib/stores/agent-input-store";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
interface AgentInputWithBadgeProps {
  badgeText: string;
  badgeClassName?: string;
}

export function AgentInputWithBadge({ badgeText, badgeClassName = "bg-blue-100 text-blue-800 border-blue-300 rounded-full font-medium text-xs animate-pulse [animation-duration:1.5s] cursor-default" }: AgentInputWithBadgeProps) {
  return (
    <div className="flex w-[50%] h-16 bg-white rounded-xl shadow-md border">
      <div className="w-16 rounded-l-xl h-full flex items-center justify-center">
        <GrEmergency size={26} className="animate-spin [animation-duration:2s]" />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <Input 
            placeholder="Ask something..."
            className="border-none shadow-none focus-visible:ring-0 text-[15px] font-medium p-0 m-0 placeholder:text-[15px] placeholder:font-medium leading-normal"
            disabled
          />
        </div>
        <div className="w-36 h-full flex items-center justify-center">
          <Badge className={badgeClassName}>{badgeText}</Badge>
        </div>
      </div>
      <div className="w-16 rounded-r-xl h-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Button className="cursor-pointer rounded-xl w-10 h-10" variant="outline"> 
            <StopCircle className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function AgentInput() {
  const { input, setInput, setId, resetInput, resetId } = useAgentInputStore();

  // Reset the input and id when the component is mounted to clear the state
  useEffect(() => {
    resetInput();
    resetId();
  }, []);

  // Handle submitting the form and navigating to the CUA page
  const handleSubmit = () => {
    if (!input.trim()) return;
    
    const id = uuidv4();
    setId(id);
    setInput(input);
    redirect(`/cua/${id}`);
  }

  // Handle pressing enter to submit the form
  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className="flex w-[50%] h-16 bg-white rounded-xl shadow-md border">
      <div className="w-16 rounded-l-xl h-full flex items-center justify-center">
        <GrEmergency size={26} />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <Input 
          placeholder="Ask something..."
          className="border-none shadow-none focus-visible:ring-0 text-[15px] font-medium p-0 m-0 placeholder:text-[15px] placeholder:font-medium leading-normal"
          autoFocus
          onKeyDown={handlePressEnter}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div className="w-16 rounded-r-xl h-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Button className="cursor-pointer rounded-xl w-10 h-10" variant="default" disabled={!input.trim()}> 
            <ArrowUpRight className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
