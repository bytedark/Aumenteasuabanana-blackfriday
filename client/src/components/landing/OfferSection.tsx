import PulsingCTAButton from './PulsingCTAButton';
import CountdownTimer from './CountdownTimer';
import TrustBadges from './TrustBadges';
import { Check } from 'lucide-react';

interface OfferSectionProps {
  checkoutUrl?: string;
}

const benefits = [
  'Guia completo do metodo passo a passo',
  'Exercicios detalhados em video (15 min/dia)',
  'BONUS: Tecnicas para durar mais na cama',
  'BONUS: Guia de erecoes mais fortes',
  'Suporte via WhatsApp por 30 dias',
  'Suporte via email: vendas@aumentonatural.com.br',
  'Garantia incondicional de 7 dias',
  'Acesso vitalicio com atualizacoes',
];

export default function OfferSection({ checkoutUrl = "#oferta" }: OfferSectionProps) {
  const handleCTAClick = () => {
    if (checkoutUrl && !checkoutUrl.startsWith('#')) {
      window.open(checkoutUrl, '_blank');
    }
  };

  return (
    <section id="oferta" className="py-12 md:py-20 bg-black relative overflow-hidden" data-testid="section-offer">
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFD300]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <p className="text-zinc-400 mb-2 uppercase tracking-wider text-xs sm:text-sm">Oferta por tempo limitado</p>
          <CountdownTimer initialHours={2} initialMinutes={30} initialSeconds={0} />
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-r from-red-950/50 to-black border-2 border-red-600 rounded-md p-4 sm:p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">BLACK FRIDAY</div>
          
          <div className="text-center mb-8">
            <p className="text-red-400 line-through text-base sm:text-lg mb-1 font-semibold">De R$99,90</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-white text-lg sm:text-2xl">Por apenas</span>
            </div>
            <p 
              className="text-4xl sm:text-5xl md:text-7xl font-black text-[#00FF66] my-4 animate-pulse"
              data-testid="text-offer-price"
            >
              R$19,90
            </p>
            <p className="text-red-400 font-bold text-sm sm:text-base">
              ECONOMIA MAXIMA DE 80% - APROVEITE ENQUANTO DURA! 
            </p>
          </div>

          <ul className="space-y-2 sm:space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3" data-testid={`item-benefit-${index}`}>
                <div className="w-5 h-5 rounded-full bg-[#00FF66] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-black" />
                </div>
                <span className="text-zinc-300 text-sm sm:text-base">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mb-6 px-2">
            <PulsingCTAButton onClick={handleCTAClick}>
              QUERO AUMENTAR MEU PENIS AGORA
            </PulsingCTAButton>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-zinc-400 text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <span className="text-[#00FF66] font-bold">PIX</span> com desconto extra
            </span>
            <span className="hidden sm:inline">|</span>
            <span>Cartao em ate 12x</span>
          </div>
        </div>

        <TrustBadges />
      </div>
    </section>
  );
}
