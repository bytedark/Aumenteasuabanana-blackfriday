import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  image: string;
  rating?: number;
  result?: string;
}

export default function TestimonialCard({ 
  name, 
  location, 
  text, 
  image,
  rating = 5,
  result
}: TestimonialCardProps) {
  return (
    <div 
      className="bg-zinc-900 border border-zinc-800 rounded-md p-4 md:p-6"
      data-testid={`card-testimonial-${name.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-12 h-12 border-2 border-[#FFD300]">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-zinc-800 text-[#FFD300]">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-white text-sm sm:text-base">{name}</p>
          <p className="text-xs sm:text-sm text-zinc-500">{location}</p>
        </div>
      </div>
      {result && (
        <div className="bg-[#00FF66]/10 border border-[#00FF66]/30 rounded px-3 py-2 mb-3">
          <p className="text-[#00FF66] text-xs sm:text-sm font-bold">{result}</p>
        </div>
      )}
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFD300] text-[#FFD300]" />
        ))}
      </div>
      <p className="text-zinc-300 text-xs sm:text-sm italic">"{text}"</p>
    </div>
  );
}
