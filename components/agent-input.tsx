import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, StopCircle } from "lucide-react";
import { GrEmergency } from "react-icons/gr";

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
        />
      </div>
      <div className="w-16 rounded-r-xl h-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Button className="cursor-pointer rounded-xl w-10 h-10" variant="default"> 
            <ArrowUpRight className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
