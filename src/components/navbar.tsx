'use client';

import Image from 'next/image';
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
          ? 'bg-white/95 backdrop-blur shadow-md text-black'
          : 'bg-transparent py-2 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="">
            <Image
              src="https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/audios/sunaymuic_logo.jpg"
              alt="Sunay Müzik Logo"
              className="rounded-full"
              width={50}
              height={50}
            />
          </span>
          <Link href="/" className="text-2xl font-bold tracking-tight">
            SunayMusicProduction
          </Link>
        </div>
        <nav className="hidden sm:flex items-center space-x-6 text-base font-medium">
          <Link href="#portfolio" className="nav-link-polish">
            Çalışmalarımız
          </Link>
          <Link href="#social-proof" className="nav-link-polish">
            Stüdyodan Kareler
          </Link>
          <Link href="#brands" className="nav-link-polish">
            Referanslar
          </Link>
          <Link href="#iletisim" className="nav-link-polish">
            İletişim
          </Link>
          {/* <Link href="/sss" className="nav-link-polish">
            SSS
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
