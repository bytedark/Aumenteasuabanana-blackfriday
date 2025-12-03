import PulsingCTAButton from './PulsingCTAButton';
import CountdownTimer from './CountdownTimer';
import { AlertTriangle, Play } from 'lucide-react';
import productMockup from '@assets/digital_product_mockup_dark_theme.png';

interface HeroSectionProps {
  checkoutUrl?: string;
  onPlayVideo?: () => void;
}

export default function HeroSection({ checkoutUrl = "#oferta", onPlayVideo }: HeroSectionProps) {
  const handleCTAClick = () => {
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFD300]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
          <AlertTriangle className="w-5 h-5 text-[#FFD300]" />
          <span className="text-[#FFD300] font-bold text-sm md:text-base uppercase tracking-wider">
            🔥 BLACK FRIDAY 🔥 ULTIMAS 50 VAGAS - DESCONTO MAXIMO
          </span>
          <AlertTriangle className="w-5 h-5 text-[#FFD300]" />
        </div>

        <h1 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white text-center mb-4 md:mb-6 leading-tight animate-fade-in-up px-2"
          style={{ animationDelay: '0.1s' }}
          data-testid="text-hero-headline"
        >
          O Metodo Secreto Para{' '}
          <span className="text-[#FFD300]">Aumentar Seu Penis em Ate 7cm</span>{' '}
          em Apenas 30 Dias
        </h1>

        <p 
          className="text-base sm:text-lg md:text-xl text-zinc-400 text-center max-w-3xl mx-auto mb-8 animate-fade-in-up px-4"
          style={{ animationDelay: '0.2s' }}
          data-testid="text-hero-subheadline"
        >
          Mais de <span className="text-[#00FF66] font-bold">1.000 homens</span> ja conquistaram resultados reais. 
          Metodo 100% natural, sem cirurgias, sem efeitos colaterais. Garantia total ou seu dinheiro de volta.
        </p>

        <div 
          className="flex justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <CountdownTimer initialHours={2} initialMinutes={30} initialSeconds={0} />
        </div>

        <div className="relative max-w-4xl mx-auto mb-8">
          <div 
            className="relative rounded-md overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <img 
              src={productMockup} 
              alt="Metodo de Aumento Peniano" 
              className="w-full h-full object-cover opacity-80"
              data-testid="img-hero-product"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFD300] flex items-center justify-center hover-elevate active-elevate-2"
                onClick={onPlayVideo}
                data-testid="button-play-video"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="black" />
              </button>
            </div>
          </div>
        </div>

        <div 
          className="flex flex-col items-center gap-4 animate-fade-in-up px-4"
          style={{ animationDelay: '0.5s' }}
        >
          <PulsingCTAButton onClick={handleCTAClick}>
            QUERO AUMENTAR MEU PENIS POR R$19,90
          </PulsingCTAButton>
          <p className="text-zinc-500 text-sm text-center">
            Pagamento 100% seguro via PIX ou Cartao - Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
}
