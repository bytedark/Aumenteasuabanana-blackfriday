import { useState } from 'react';
import { Play, X } from 'lucide-react';
import PulsingCTAButton from './PulsingCTAButton';
import productMockup from '@assets/digital_product_mockup_dark_theme.png';

interface VideoSectionProps {
  videoUrl?: string;
  checkoutUrl?: string;
}

export default function VideoSection({ videoUrl, checkoutUrl = "#oferta" }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCTAClick = () => {
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsPlaying(true);
    } else {
      alert('Video sera adicionado em breve!');
    }
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('/').pop()?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <section className="py-12 md:py-20 bg-zinc-950" data-testid="section-video">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-3 px-2">
            Assista e Descubra o Segredo
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Em apenas 5 minutos voce vai entender como milhares de homens estao aumentando seus penis de forma natural
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-md overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
            {isPlaying && videoUrl ? (
              <>
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid="video-player-iframe"
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 flex items-center justify-center hover-elevate z-10"
                  data-testid="button-close-video"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </>
            ) : (
              <>
                <img 
                  src={productMockup} 
                  alt="Video de Apresentacao" 
                  className="w-full h-full object-cover opacity-60"
                  data-testid="img-video-thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <button 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#FFD300] flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
                    onClick={handlePlayClick}
                    data-testid="button-play-main-video"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black ml-1" fill="black" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm sm:text-base font-bold bg-black/60 py-2 px-4 rounded">
                    Clique para assistir o video completo
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 px-4">
          <PulsingCTAButton onClick={handleCTAClick}>
            QUERO COMECAR AGORA POR R$19,90
          </PulsingCTAButton>
          <p className="text-zinc-500 text-xs sm:text-sm text-center">
            Clique para garantir sua vaga antes que acabe
          </p>
        </div>
      </div>
    </section>
  );
}
