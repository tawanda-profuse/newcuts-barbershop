'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

const categories = ['All', 'Fades', 'Classic', 'Beards', 'Kids'];

const portfolio = [
  { id: 1, category: 'Fades', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80', title: 'High Skin Fade' },
  { id: 2, category: 'Classic', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80', title: 'Executive Contour' },
  { id: 3, category: 'Beards', image: 'https://images.pexels.com/photos/19140177/pexels-photo-19140177.jpeg', title: 'Sculpted Beard Trim' },
  { id: 4, category: 'Fades', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80', title: 'Mid Drop Fade' },
  { id: 5, category: 'Classic', image: 'https://images.pexels.com/photos/7447146/pexels-photo-7447146.jpeg', title: 'Textured Pompadour' },
  { id: 6, category: 'Beards', image: 'https://images.pexels.com/photos/7697677/pexels-photo-7697677.jpeg', title: 'Hot Towel Lineup' },
  { id: 7, category: 'Kids', image: 'https://images.pexels.com/photos/7697358/pexels-photo-7697358.jpeg', title: 'Kids Fade' },
  { id: 8, category: 'Kids', image: 'https://images.pexels.com/photos/37836122/pexels-photo-37836122.jpeg', title: 'Kids Classic Cuts' },
  { id: 9, category: 'Kids', image: 'https://images.pexels.com/photos/29317630/pexels-photo-29317630.jpeg', title: 'Kids Dreads' },
  { id: 10, category: 'Classic', image: 'https://images.pexels.com/photos/7697224/pexels-photo-7697224.jpeg', title: 'Classic cuts' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof portfolio[0] | null>(null);

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-[var(--muted)] cursor-zoom-in"
              >
                <motion.img 
                  layoutId={`img-${item.id}`}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/90 via-[var(--brand-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-[var(--brand-accent)] text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</p>
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
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

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            
            <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
              <motion.img
                layoutId={`img-${selectedImage.id}`}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[75vh] object-contain rounded-lg"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-[var(--brand-accent)] font-semibold uppercase tracking-widest">{selectedImage.category}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}