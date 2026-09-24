import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeLink from "@/components/HomeLink";
import PromoModal from "@/components/PromoModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Cuts Barbershop",
  description: "New Cuts Barbershop is a premier barbershop offering top-notch grooming services, including haircuts, beard trims, and styling. Our skilled barbers provide personalized care to ensure you leave looking and feeling your best.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HomeLink />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-[var(--muted)] bg-white/80">
            <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-4 text-sm text-[var(--foreground)]/70">
              <span aria-label="Copyright">©</span>
              <span>{new Date().getFullYear()}</span>
              <span>New Cuts Barbershop</span>
              <span className="text-[var(--brand-secondary)]">•</span>
              <a href="/terms" className="transition-colors hover:text-[var(--brand-primary)]">
                Terms
              </a>
            </div>
          </footer>
        </div>
        <PromoModal />
      </body>
    </html>
  );
}
