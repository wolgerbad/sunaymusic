import HomepageClient from '@/components/homepage-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İstanbul Ses Kayıt Stüdyosu - Sunay Music Stüdyo',
  description:
    "İstanbul'da profesyonel ses kaydı ve mixing hizmetleri sunuyoruz. Şişli, Kadıköy ve Bayrampaşa'daki stüdyolarımızda kaliteli kayıt deneyimi yaşayın.",
};



export default function Home() {

  return <HomepageClient />;
}
