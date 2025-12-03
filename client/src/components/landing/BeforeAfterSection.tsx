import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react';
import PulsingCTAButton from './PulsingCTAButton';

interface BeforeAfterSectionProps {
  checkoutUrl?: string;
}

const comparisons = [
  {
    before: 'Penis pequeno, vergonha e inseguranca',
    after: 'Ate 7cm a mais, confianca total',
  },
  {
    before: 'Erecoes fracas e sem duracao',
    after: 'Erecoes duras como aco, por horas',
  },
  {
    before: 'Parceira insatisfeita na cama',
    after: 'Mulher implorando por mais',
  },
  {
    before: 'Medo de tirar a roupa',
    after: 'Orgulho do seu tamanho',
  },
];

export default function BeforeAfterSection({ checkoutUrl = "#oferta" }: BeforeAfterSectionProps) {
  const handleCTAClick = () => {
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-black" data-testid="section-before-after">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-3 px-2">
            Sua Vida Vai Mudar Completamente
          </h2>
          <p className="text-[#FFD300] font-semibold text-sm sm:text-base">Veja a transformacao que espera por voce</p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-zinc-900/50 border border-red-500/30 rounded-md p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <h3 className="text-lg sm:text-xl font-bold text-red-500">ANTES</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {comparisons.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base"
                    data-testid={`item-before-${index}`}
                  >
                    <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                    <span>{item.before}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-[#00FF66]/30 rounded-md p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF66]" />
                <h3 className="text-lg sm:text-xl font-bold text-[#00FF66]">DEPOIS</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {comparisons.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base"
                    data-testid={`item-after-${index}`}
                  >
                    <span className="text-[#00FF66] mt-1 flex-shrink-0">✓</span>
                    <span>{item.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-zinc-400 mb-2 text-sm sm:text-base">
            <span>Sua vida agora</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD300]" />
            <span className="text-[#00FF66] font-bold">Sua nova realidade</span>
          </div>
          <PulsingCTAButton size="default" onClick={handleCTAClick}>
            QUERO MINHA TRANSFORMACAO
          </PulsingCTAButton>
        </div>
      </div>
    </section>
  );
}
