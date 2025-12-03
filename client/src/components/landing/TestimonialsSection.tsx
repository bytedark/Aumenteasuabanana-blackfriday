import TestimonialCard from './TestimonialCard';
import maleAvatar from '@assets/male_testimonial_avatar_portrait.png';
import femaleAvatar from '@assets/female_testimonial_avatar_portrait.png';
import youngMaleAvatar from '@assets/young_male_testimonial_avatar.png';

const testimonials = [
  {
    name: 'Carlos M.',
    location: 'Sao Paulo, SP',
    text: 'Eu tinha apenas 12cm e vivia com vergonha. Em 45 dias cheguei aos 18cm! Minha esposa nao acredita na diferenca. Nossa vida intima nunca foi tao boa.',
    image: maleAvatar,
    result: '+6cm em 45 dias',
  },
  {
    name: 'Roberto S.',
    location: 'Rio de Janeiro, RJ',
    text: 'Ja tinha tentado de tudo: pilulas, bombas, nada funcionava. Esse metodo e diferente. Resultados reais, permanentes. Ganhei 5cm e grossura tambem!',
    image: youngMaleAvatar,
    result: '+5cm de comprimento',
  },
  {
    name: 'Marcos A.',
    location: 'Belo Horizonte, MG',
    text: 'Minha namorada sempre disse que tamanho nao importava, mas depois do metodo ela confessou que agora sente muito mais prazer. Valeu cada centavo!',
    image: maleAvatar,
    result: '+4cm em 30 dias',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-zinc-950" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-3 px-2">
            Homens Reais, Resultados Reais
          </h2>
          <p className="text-[#FFD300] font-semibold text-sm sm:text-base">Veja o que eles conquistaram com o metodo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-zinc-400 text-sm md:text-base">
            +1.000 homens ja transformaram suas vidas com nosso metodo
          </p>
        </div>
      </div>
    </section>
  );
}
