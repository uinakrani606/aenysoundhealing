import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: 'Sound Healing',
      description: 'Vibrational therapies to restore your natural rhythm and promote profound relaxation.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Holistic Therapy',
      description: 'Personalized mental and physical wellness plans focusing on the root cause.',
      icon: (
        <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Deep Sleep Coaching',
      description: 'Science-backed methods to improve your sleep architecture and daytime energy.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
  ];

  return (
    <Section id="features">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.id} variant="default" className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 p-4 bg-secondary inline-block rounded-full group-hover:bg-light transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-heading-sm font-bold text-primary mb-4">{feature.title}</h3>
            <p className="text-body text-text leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
