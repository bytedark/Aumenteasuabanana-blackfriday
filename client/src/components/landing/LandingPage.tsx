import { useState } from 'react';
import HeroSection from './HeroSection';
import BeforeAfterSection from './BeforeAfterSection';
import PersuasionSection from './PersuasionSection';
import VideoSection from './VideoSection';
import TestimonialsSection from './TestimonialsSection';
import OfferSection from './OfferSection';
import Footer from './Footer';
import SocialProofNotification from './SocialProofNotification';

interface LandingPageProps {
  checkoutUrl?: string;
  videoUrl?: string;
}

export default function LandingPage({ checkoutUrl, videoUrl }: LandingPageProps) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handlePlayHeroVideo = () => {
    if (videoUrl) {
      setShowVideoModal(true);
    } else {
      document.querySelector('#video-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <HeroSection checkoutUrl={checkoutUrl} onPlayVideo={handlePlayHeroVideo} />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <PersuasionSection variant="why-works" checkoutUrl={checkoutUrl} />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <BeforeAfterSection checkoutUrl={checkoutUrl} />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <div id="video-section">
        <VideoSection videoUrl={videoUrl} checkoutUrl={checkoutUrl} />
      </div>
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <PersuasionSection variant="secrets" checkoutUrl={checkoutUrl} />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <TestimonialsSection />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <PersuasionSection variant="what-receive" checkoutUrl={checkoutUrl} />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <PersuasionSection variant="limited" checkoutUrl={checkoutUrl} />
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD300]/30 to-transparent" />
      
      <OfferSection checkoutUrl={checkoutUrl} />
      
      <Footer checkoutUrl={checkoutUrl} />
      
      <SocialProofNotification />

      {showVideoModal && videoUrl && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={videoUrl.includes('youtube') 
                ? `https://www.youtube.com/embed/${videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop()}?autoplay=1`
                : videoUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
