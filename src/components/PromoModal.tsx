'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export default function PromoModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/book') {
      setIsOpen(false);
      return;
    }

    // Delay popup by 3 seconds for better UX
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname === '/book') return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-xl">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={20} />
        </button>
        <h3 className="text-2xl font-bold mb-2">First Visit?</h3>
        <p className="text-gray-600 mb-6">Book today and get a complimentary beard oil treatment with any standard haircut.</p>
        <a href="/book" onClick={() => setIsOpen(false)} className="block w-full text-center bg-slate-900 text-white p-3 rounded-md font-semibold">
          Claim Offer & Book
        </a>
      </div>
    </div>
  );
}