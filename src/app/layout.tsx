import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'İstanbul Ses Kayıt Stüdyosu - Sunay Music Stüdyo',
  description:
    "İstanbul'da profesyonel ses kaydı ve mixing hizmetleri sunuyoruz. Şişli, Kadıköy ve Bayrampşa'daki stüdyolarımızda kaliteli kayıt deneyimi yaşayın.",
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Sunay Music Stüdyo',
    images: [
      {
        url: 'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunaymuic_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunay Music Stüdyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunaymuic_logo.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
