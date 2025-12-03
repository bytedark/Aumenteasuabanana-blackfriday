import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PulsingCTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "default" | "lg";
}

export default function PulsingCTAButton({ 
  children, 
  onClick, 
  className,
  size = "lg" 
}: PulsingCTAButtonProps) {
  return (
    <Button
      onClick={onClick}
      data-testid="button-cta-pulsing"
      className={cn(
        "animate-pulse-cta font-bold text-black uppercase tracking-wide w-full sm:w-auto",
        "bg-[#00FF66] hover:bg-[#00FF66] border-[#00FF66]",
        "whitespace-normal text-center leading-tight",
        size === "lg" 
          ? "text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-8 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]" 
          : "text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 min-h-[50px]",
        className
      )}
    >
      {children}
    </Button>
  );
}
