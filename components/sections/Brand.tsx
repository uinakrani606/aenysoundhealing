import React from 'react';
import { Section } from '../ui/Section';

export const Brand = () => {
  const brands = [
    { name: 'Wellness', id: 1 },
    { name: 'Harmony', id: 2 },
    { name: 'Serenity', id: 3 },
    { name: 'Balance', id: 4 },
    { name: 'Vitality', id: 5 },
  ];

  return (
    <Section className="py-8 md:py-12 bg-secondary border-y border-border/30">
      <div className="flex flex-col items-center">
        <p className="text-small text-text font-medium mb-6 uppercase tracking-wider text-center">Trusted by top holistic clinics and practitioners</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text hover:text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="font-bold text-body text-text hover:text-primary">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
