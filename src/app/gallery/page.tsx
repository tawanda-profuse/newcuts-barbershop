'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Fades', 'Classic', 'Beards'];

const portfolio = [
  { id: 1, category: 'Fades', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80', title: 'High Skin Fade' },
  { id: 2, category: 'Classic', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80', title: 'Executive Contour' },
  { id: 3, category: 'Beards', image: 'https://images.unsplash.com/photo-1588773727339-fc2d3345cb34?auto=format&fit=crop&w=800&q=80', title: 'Sculpted Beard Trim' },
  { id: 4, category: 'Fades', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80', title: 'Mid Drop Fade' },
  { id: 5, category: 'Classic', image: 'https://images.unsplash.com/photo-1593726858169-122e2327090b?auto=format&fit=crop&w=800&q=80', title: 'Textured Pompadour' },
  { id: 6, category: 'Beards', image: 'https://images.unsplash.com/photo-1620331317312-7489ab31f496?auto=format&fit=crop&w=800&q=80', title: 'Hot Towel Lineup' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPortfolio = portfolio.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[var(--brand-primary)] tracking-tight mb-4">The Lookbook</h1>
          <p className="text-lg text-[var(--foreground)]/75 max-w-2xl mx-auto">
            Explore our signature cuts and styles. Find your next look before you even sit in the chair.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[var(--brand-primary)] text-white shadow-md'
                  : 'bg-white border border-[var(--muted)] text-[var(--foreground)] hover:border-[var(--brand-secondary)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-[var(--muted)]"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-[var(--brand-accent)] text-sm font-bold uppercase tracking-wider">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/book" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform shadow-lg">
            Book Your Style
          </Link>
        </div>
      </div>
    </main>
  );
}