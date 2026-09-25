'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

const teamData = {
  marcus: {
    name: "Marcus",
    title: "Master Barber",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    bio: "With over 12 years behind the chair, Marcus blends classic barbering technique with modern texture styling. He specializes in executive contours and complete style transformations, ensuring every client leaves feeling personal and confident.",
    specialties: ["Classic Scissor Cuts", "Texture Styling", "Hot Towel Shaves"]
  },
  david: {
    name: "David",
    title: "Fade Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    bio: "David brings 9 years of precision experience to New Cuts. Known for his immaculate skin fades, sharp line-ups, and structural beard design, he provides a calming chair-side experience that makes every appointment feel effortless.",
    specialties: ["Skin Fades", "Beard Sculpting", "Sharp Line-ups"]
  }
};

export default function BarberProfile({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use() for Next.js app router compatibility
  const resolvedParams = use(params); 
  const slug = resolvedParams.slug.toLowerCase() as keyof typeof teamData;
  const barber = teamData[slug];

  if (!barber) return notFound();

  return (
    <main className="min-h-screen bg-[var(--background)] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[var(--muted)]">
        <div className="grid md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <img src={barber.image} alt={barber.name} className="h-full w-full object-cover min-h-[400px]" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="text-[var(--brand-secondary)] uppercase tracking-[0.2em] text-sm font-bold mb-2">{barber.title}</p>
            <h1 className="text-4xl font-black text-[var(--brand-primary)] mb-6">{barber.name}</h1>
            <p className="text-lg text-[var(--foreground)]/80 mb-8 leading-relaxed">
              {barber.bio}
            </p>
            
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[var(--brand-primary)] uppercase tracking-wider mb-4">Specialties</h3>
              <ul className="space-y-2">
                {barber.specialties.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[var(--foreground)]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Link href={`/book?barber=${barber.name}`} className="bg-[var(--brand-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
                Book {barber.name}
              </Link>
              <Link href="/about" className="border border-[var(--muted)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--muted)]/50 transition">
                Back to Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}