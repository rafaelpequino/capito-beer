'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'André Kinty',
    rating: 5,
    text: `“Desde o primeiro gole, a cerveja me conquistou! O equilíbrio perfeito entre sabor e refrescância faz dela a escolha ideal para qualquer ocasião. Com um aroma envolvente e um toque suave no paladar, é impossível tomar só uma.”`,
  },
  {
    name: 'Beatriz Ramos',
    rating: 5,
    text: `“Capito Beer é sinônimo de qualidade! Refrescante, saborosa e perfeita para qualquer ocasião. Recomendo demais.”`,
  },
  {
    name: 'Carlos Dias',
    rating: 4,
    text: `“Gostei muito do sabor leve e do aroma marcante. Dá pra perceber o cuidado na produção. Virou minha cerveja favorita!”`,
  },
];

export default function Depoiments() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap()); // inicializa
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-[#f6e1c5] py-16 flex justify-center max-w-full overflow-hidden">
      <div className="max-w-[1280px] w-full flex flex-col items-center justify-between lg:flex-row gap-10 px-4">
        {/* Introdução */}
        <div className="max-w-[600px]">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-extrabold text-[var(--red)] leading-tight mb-4">
            Quem prova, aprova!
          </h2>
          <p className="text-[var(--gray)] text-lg font-semibold">
            Da uma olhada nos feedbacks de quem <br /> já provou a Capito Beer
          </p>
        </div>

        {/* Carrossel */}
        <div className="w-full px-12 max-w-[580px]">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className=" rounded-[var(--radius)] border border-[var(--black)] px-6 py-5 min-h-[260px]">
                    <h3 className="text-[var(--red)] font-bold text-xl mb-2">{item.name}</h3>
                    <div className="flex gap-1 mb-4 text-[var(--orange)] text-3xl">
                      {Array(item.rating)
                        .fill('★')
                        .map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                    </div>
                    <p className="text-[var(--black)] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Bolinhas dinâmicas */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-[6px] h-[6px] rounded-full transition ${
                  i === current
                    ? 'bg-[var(--red)] scale-110'
                    : 'bg-[var(--text)] opacity-50'
                } inline-block`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
