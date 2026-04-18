'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

const breadcrumbNames: Record<string, string> = {
  '': 'Ana Sayfa',
  sss: 'Sık Sorulan Sorular',
  fiyatlar: 'Fiyatlar',
  iletisim: 'İletişim',
  hakkimizda: 'Hakkımızda',
  servisler: 'Servisler',
  portfolyo: 'Portfölyo',
  referanslar: 'Referanslar',
  paketler: 'Paketler',
  ekipmanlarimiz: 'Ekipmanlarımız',
  'studyo-galeri': 'Stüdyo Galerisi',
  'band-prova-kayit': 'Band Prova Kayıt',
  'bayrampasa-kayit-studyosu': 'Bayrampaşa Kayıt Stüdyosu',
  'bayrampasa-mixing': 'Bayrampaşa Mixing',
  'bayrampasa-muzik': 'Bayrampaşa Müzik',
  'bayrampasa-ses-kayit': 'Bayrampaşa Ses Kayıt',
  'bayrampasa-studyo': 'Bayrampaşa Stüdyo',
  'beat-production': 'Beat Production',
  'besiktas-kayit-studyosu': 'Beşiktaş Kayıt Stüdyosu',
  'en-iyi-mikrofon-hangisi': 'En İyi Mikrofon Hangisi',
  'ev-studyosu-mu-profesyonel-studyomu': 'Ev Stüdyosu mu Profesyonel Stüdyomu',
  'istanbul-kayit-studyosu': 'İstanbul Kayıt Stüdyosu',
  'istanbul-mixing': 'İstanbul Mixing',
  'istanbul-muzik': 'İstanbul Müzik',
  'istanbul-ses-kayit': 'İstanbul Ses Kayıt',
  'istanbul-studyo': 'İstanbul Stüdyo',
  'kadikoy-kayit-studyosu': 'Kadıköy Kayıt Stüdyosu',
  'kadikoy-mixing': 'Kadıköy Mixing',
  'kadiköy-muzik': 'Kadıköy Müzik',
  'kadiköy-ses-kayit': 'Kadıköy Ses Kayıt',
  'kadiköy-studyo': 'Kadıköy Stüdyo',
  'kayit-studyosu-fiyatlari': 'Kayıt Stüdyosu Fiyatları',
  'kayit-studyosu-fiyatlari-neye-gore-degisir':
    'Kayıt Stüdyosu Fiyatları Neye Göre Değişir',
  mastering: 'Mastering',
  'mix-mastering': 'Mix Mastering',
  'mix-mastering-bayrampasa': 'Mix Mastering Bayrampaşa',
  'mix-mastering-fiyatlari': 'Mix Mastering Fiyatları',
  'mix-mastering-istanbul': 'Mix Mastering İstanbul',
  'mix-mastering-kadikoy': 'Mix Mastering Kadıköy',
  mixing: 'Mixing',
  'podcast-kayit': 'Podcast Kayıt',
  'podcast-studyosu': 'Podcast Stüdyosu',
  'production-support': 'Production Support',
  'rap-kayit-studyosu': 'Rap Kayıt Stüdyosu',
  'rap-vokal-kaydi-nasil-yapilir': 'Rap Vokal Kaydı Nasıl Yapılır',
  'reklam-seslendirme': 'Reklam Seslendirme',
  'saatlik-studyo-ucreti': 'Saatlik Stüdyo Ücreti',
  'sarkicilar-icin-kayit-studyosu': 'Şarkıcılar İçin Kayıt Stüdyosu',
  'ses-kayit': 'Ses Kayıt',
  'sisli-ses-kayit-studyosu': 'Şişli Ses Kayıt Stüdyosu',
  'studyoya-gelmeden-once-ne-yapilmali': 'Stüdyoya Gelmeden Önce Ne Yapılmalı',
  ucretler: 'Ücretler',
  'vokal-kayit': 'Vokal Kayıt',
  'youtube-ses-kayit': 'YouTube Ses Kayıt',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const name =
      breadcrumbNames[segment] ||
      segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    return { href, name };
  });

  if (breadcrumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm text-gray-300 mb-6"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-teal-600 transition-colors"
      >
        <FaHome />
        Ana Sayfa
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          {index === breadcrumbs.length - 1 ? (
            <span className="font-medium">{crumb.name}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-teal-600 transition-colors"
            >
              {crumb.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
