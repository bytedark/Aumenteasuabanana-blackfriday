import { Check, Zap, Target, TrendingUp, Gift, Clock, Heart, Shield, Flame } from 'lucide-react';
import PulsingCTAButton from './PulsingCTAButton';

interface PersuasionItem {
  icon: typeof Check;
  title: string;
  description: string;
}

interface PersuasionSectionProps {
  variant: 'why-works' | 'what-receive' | 'limited' | 'secrets';
  checkoutUrl?: string;
}

const sections = {
  'why-works': {
    title: 'Por Que Esse Metodo Realmente Funciona?',
    subtitle: 'A ciencia por tras do crescimento peniano',
    items: [
      { icon: Zap, title: 'Ativacao Celular', description: 'Estimula a multiplicacao das celulas do corpo cavernoso, promovendo crescimento real e permanente' },
      { icon: Target, title: 'Fluxo Sanguineo', description: 'Aumenta em ate 300% o fluxo de sangue para a regiao, garantindo erecoes mais firmes e duradouras' },
      { icon: TrendingUp, title: 'Resultados Comprovados', description: 'Estudos mostram ganhos medios de 3 a 7cm em comprimento e ate 2cm em grossura' },
    ],
  },
  'what-receive': {
    title: 'O Que Voce Vai Receber Hoje',
    subtitle: 'Tudo isso por apenas R$19,90',
    items: [
      { icon: Gift, title: 'Guia Completo do Metodo', description: 'Passo a passo detalhado com exercicios diarios que levam apenas 15 minutos' },
      { icon: Flame, title: 'Tecnicas Avancadas', description: 'Segredos usados por atores adultos para maximizar o tamanho e performance' },
      { icon: Heart, title: 'Bonus: Guia de Performance', description: 'Aprenda a durar mais tempo na cama e dar mais prazer a sua parceira' },
    ],
  },
  'limited': {
    title: '🔥 PRECO DE BLACK FRIDAY - NUNCA MAIS SERA ESSE PRECO 🔥',
    subtitle: 'Apenas 50 vagas na Black Friday',
    items: [
      { icon: Clock, title: 'De R$99,90 por R$19,90', description: 'Desconto maximo de 80% apenas na Black Friday - economize R$80' },
      { icon: Target, title: 'Apenas 50 Vagas', description: 'Black Friday termina em poucas horas. Quando acabar, nunca mais terao esse preco' },
      { icon: Shield, title: 'Acesso Vitalicio', description: 'Pague uma unica vez e tenha acesso para sempre, incluindo todas as atualizacoes' },
    ],
  },
  'secrets': {
    title: 'O Que a Industria Esconde de Voce',
    subtitle: 'A verdade que as farmaceuticas nao querem que voce saiba',
    items: [
      { icon: Target, title: 'Pilulas Nao Funcionam', description: 'Suplementos prometem milagres mas nao entregam resultados. Nosso metodo e 100% natural' },
      { icon: Check, title: 'Cirurgia e Arriscada', description: 'Alem de cara, a cirurgia tem riscos graves. Nosso metodo e seguro e indolor' },
      { icon: TrendingUp, title: 'Resultados Permanentes', description: 'Diferente de bombas e outros metodos, os ganhos com nosso sistema sao para sempre' },
    ],
  },
};

export default function PersuasionSection({ variant, checkoutUrl = "#oferta" }: PersuasionSectionProps) {
  const section = sections[variant];

  const handleCTAClick = () => {
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="py-12 md:py-20 bg-black"
      data-testid={`section-persuasion-${variant}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-3 px-2">
            {section.title}
          </h2>
          <p className="text-[#FFD300] font-semibold text-sm sm:text-base">{section.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-10">
          {section.items.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-md p-4 sm:p-6 text-center hover-elevate"
              data-testid={`card-persuasion-item-${index}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD300]/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFD300]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center px-4">
          <PulsingCTAButton size="default" onClick={handleCTAClick}>
            QUERO COMECAR AGORA
          </PulsingCTAButton>
        </div>
      </div>
    </section>
  );
}
