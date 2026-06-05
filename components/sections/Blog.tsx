import React from 'react';
import Link from 'next/link';

export const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How Sound Waves Affect Your Brain and Sleep Quality',
      category: 'Healing',
      date: 'Oct 12, 2023',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      title: '5 Natural Ways to Overcome Chronic Insomnia',
      category: 'Therapy',
      date: 'Oct 05, 2023',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'The Connection Between Mindfulness and Deep Rest',
      category: 'Wellness',
      date: 'Sep 28, 2023',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <div className="inline-block px-4 py-2 bg-green/10 text-green rounded-full w-fit">
              <span className="font-bold tracking-widest uppercase text-xs">Our Blog</span>
            </div>
            <h2 className="text-[48px] lg:text-[56px] font-extrabold text-dark-green leading-[1.1]">
              Latest Articles
            </h2>
          </div>
          <Link 
            href="#all-articles"
            className="px-8 py-4 bg-transparent border-2 border-[#DADBDB] text-dark-green rounded-full font-bold hover:border-dark-green transition-all duration-300 whitespace-nowrap"
          >
            View All Posts
          </Link>
        </div>

        {/* 3 Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col bg-white rounded-[32px] overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-[#DADBDB]/30"
            >
              {/* Image with Tag Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[24px]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-dark-green shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[#535353] text-[14px] mb-4 font-medium">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-[24px] font-bold text-dark-green leading-tight mb-6 group-hover:text-orange transition-colors">
                  <Link href={`#post-${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <Link 
                  href={`#post-${post.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-dark-green font-bold hover:text-orange transition-colors uppercase tracking-widest text-[14px]"
                >
                  <span>Read More</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
