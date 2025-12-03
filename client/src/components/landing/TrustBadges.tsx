import { Shield, Lock, CreditCard, Clock } from 'lucide-react';
import guaranteeBadge from '@assets/golden_guarantee_shield_badge.png';

const badges = [
  { icon: Shield, label: 'Compra 100% Segura' },
  { icon: Lock, label: 'Dados Protegidos' },
  { icon: CreditCard, label: 'PIX e Cartao' },
  { icon: Clock, label: 'Acesso Imediato' },
];

export default function TrustBadges() {
  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 text-zinc-400"
            data-testid={`badge-trust-${index}`}
          >
            <badge.icon className="w-5 h-5 text-[#FFD300]" />
            <span className="text-sm">{badge.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <img 
            src={guaranteeBadge} 
            alt="Garantia de 7 dias" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
            data-testid="img-guarantee-badge"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-black bg-[#FFD300] px-2 py-1 rounded transform -rotate-12">
              7 DIAS
            </span>
          </div>
        </div>
      </div>
      <p className="text-center text-zinc-400 mt-4 text-sm md:text-base">
        Garantia incondicional de <span className="text-[#FFD300] font-bold">7 dias</span>. 
        Se nao gostar, devolvemos seu dinheiro.
      </p>
    </div>
  );
}
