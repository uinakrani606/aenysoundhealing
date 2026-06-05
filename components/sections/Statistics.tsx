import React from 'react';

export const Statistics = () => {
  const stats = [
    { id: 1, value: '1,200k+', label: 'Healing Sessions' },
    { id: 2, value: '98%+', label: 'Client Satisfaction' },
    { id: 3, value: '30k+', label: 'Certified Healing Team' }
  ];

  return (
    <section className="py-16 bg-white border-t border-[#DADBDB]/30">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#DADBDB]/30">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <div className="text-[56px] font-extrabold text-green leading-none mb-4">
                {stat.value}
              </div>
              <div className="text-[18px] font-bold text-dark-green">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
