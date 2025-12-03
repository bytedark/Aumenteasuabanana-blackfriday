import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const notifications = [
  { name: 'Joao', city: 'Sao Paulo', result: 'Acabou de comprar!' },
  { name: 'Carlos', city: 'Rio de Janeiro', result: 'Acabou de comprar!' },
  { name: 'Pedro', city: 'Belo Horizonte', result: 'Acabou de comprar!' },
  { name: 'Lucas', city: 'Salvador', result: 'Acabou de comprar!' },
  { name: 'Marcos', city: 'Curitiba', result: 'Acabou de comprar!' },
  { name: 'Rafael', city: 'Porto Alegre', result: 'Acabou de comprar!' },
  { name: 'Fernando', city: 'Florianopolis', result: 'Acabou de comprar!' },
  { name: 'Andre', city: 'Recife', result: 'Acabou de comprar!' },
  { name: 'Bruno', city: 'Brasilia', result: 'Acabou de comprar!' },
  { name: 'Gustavo', city: 'Fortaleza', result: 'Acabou de comprar!' },
  { name: 'Tiago', city: 'Manaus', result: 'Acabou de comprar!' },
  { name: 'Diego', city: 'Goiania', result: 'Acabou de comprar!' },
];

export default function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentNotification(prev => (prev + 1) % notifications.length);
        }, 500);
      }, 4000);
    };

    const initialDelay = setTimeout(showNotification, 3000);
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const notification = notifications[currentNotification];

  return (
    <div
      className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
      data-testid="notification-social-proof"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-md shadow-lg p-3 md:p-4 flex items-center gap-3 max-w-[280px] sm:max-w-[320px] md:max-w-sm">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00FF66]/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#00FF66]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs sm:text-sm md:text-base font-semibold truncate">
            {notification.name} de {notification.city}
          </p>
          <p className="text-[#00FF66] text-xs sm:text-sm font-bold">
            {notification.result}
          </p>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-zinc-500 hover:text-white transition-colors p-1"
          data-testid="button-dismiss-notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
