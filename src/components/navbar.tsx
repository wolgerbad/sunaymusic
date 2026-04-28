'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-md py-2 text-black'
          : 'bg-transparent py-2 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Sunay Music Stüdyo
          </Link>
        </div>
        <nav className="hidden sm:flex items-center space-x-6 text-base font-medium">
          <a href="#portfolio" className="nav-link-polish">
            Çalışmalarımız
          </a>
          <a href="#social-proof" className="nav-link-polish">
            Stüdyodan Kareler
          </a>
          <a href="#brands" className="nav-link-polish">
            Referanslar
          </a>
          <Link href="/iletisim" className="nav-link-polish">
            İletişim
          </Link>
          <Link href="/sss" className="nav-link-polish">
            SSS
          </Link>
        </nav>
      </div>
    </header>
  );
}
