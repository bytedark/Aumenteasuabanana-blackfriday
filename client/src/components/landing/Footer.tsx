import PulsingCTAButton from './PulsingCTAButton';
import { Shield, Mail, Phone } from 'lucide-react';

interface FooterProps {
  checkoutUrl?: string;
}

export default function Footer({ checkoutUrl = "#oferta" }: FooterProps) {
  const handleCTAClick = () => {
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800" data-testid="section-footer">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex justify-center mb-8 px-4">
          <PulsingCTAButton size="default" onClick={handleCTAClick}>
            ULTIMA CHANCE - R$19,90
          </PulsingCTAButton>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Contato</h4>
            <div className="space-y-2 text-zinc-400 text-xs sm:text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                vendas@aumentonatural.com.br
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp: (11) 98765-4321
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Seguranca</h4>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm">
              <Shield className="w-4 h-4 text-[#FFD300]" />
              <span>Compra 100% Segura e Sigilosa</span>
            </div>
            <p className="text-zinc-500 text-xs mt-2">
              Seu nome nao aparece na fatura
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Links</h4>
            <div className="space-y-2 text-zinc-400 text-xs sm:text-sm">
              <p>
                <a 
                  href="#" 
                  className="hover:text-[#FFD300] transition-colors"
                  data-testid="link-terms"
                  onClick={(e) => { e.preventDefault(); }}
                >
                  Termos de Uso
                </a>
              </p>
              <p>
                <a 
                  href="#" 
                  className="hover:text-[#FFD300] transition-colors"
                  data-testid="link-privacy"
                  onClick={(e) => { e.preventDefault(); }}
                >
                  Politica de Privacidade
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 text-center">
          <p className="text-zinc-500 text-xs md:text-sm px-4">
            © 2024 Metodo Aumento Natural. Todos os direitos reservados. 
            Este site nao e afiliado ao Facebook ou a qualquer entidade do Facebook.
            Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
}
