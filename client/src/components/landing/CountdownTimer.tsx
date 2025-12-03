import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function CountdownTimer({ 
  initialHours = 2, 
  initialMinutes = 30, 
  initialSeconds = 0 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          return { hours: initialHours, minutes: initialMinutes, seconds: initialSeconds };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialHours, initialMinutes, initialSeconds]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-zinc-900 border border-[#FFD300]/30 rounded-md px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
        <span 
          className="text-2xl md:text-4xl font-bold text-[#FFD300] animate-countdown"
          data-testid={`text-countdown-${label.toLowerCase()}`}
        >
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-zinc-400 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 md:gap-4" data-testid="countdown-timer">
      <TimeBlock value={timeLeft.hours} label="Horas" />
      <span className="text-2xl md:text-4xl font-bold text-[#FFD300]">:</span>
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <span className="text-2xl md:text-4xl font-bold text-[#FFD300]">:</span>
      <TimeBlock value={timeLeft.seconds} label="Seg" />
    </div>
  );
}
