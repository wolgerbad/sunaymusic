const fs = require('fs');
const path = require('path');
const base = path.join('src', 'app');
const slugs = [
  '/mix-mastering',
  '/vokal-kayit',
  '/beat-production',
  '/podcast-kayit',
  '/reklam-seslendirme',
  '/kayit-studyosu-fiyatlari',
  '/mix-mastering-fiyatlari',
  '/saatlik-studyo-ucreti',
  '/paketler',
  '/kadikoy-kayit-studyosu',
  '/besiktas-kayit-studyosu',
  '/sisli-ses-kayit-studyosu',
  '/istanbul-kayit-studyosu',
  '/rap-kayit-studyosu',
  '/sarkicilar-icin-kayit-studyosu',
  '/podcast-studyosu',
  '/youtube-ses-kayit',
  '/band-prova-kayit',
  '/ekipmanlarimiz',
  '/referanslar',
  '/portfolyo',
  '/hakkimizda',
  '/studyo-galeri',
  '/kayit-studyosu-fiyatlari-neye-gore-degisir',
  '/studyoya-gelmeden-once-ne-yapilmali',
  '/ev-studyosu-mu-profesyonel-studyomu',
  '/rap-vokal-kaydi-nasil-yapilir',
  '/en-iyi-mikrofon-hangisi',
  '/bayrampasa-kayit-studyosu',
  '/bayrampasa-mixing',
  '/bayrampasa-muzik',
  '/bayrampasa-ses-kayit',
  '/bayrampasa-studyo',
  '/istanbul-mixing',
  '/istanbul-muzik',
  '/istanbul-ses-kayit',
  '/istanbul-studyo',
  '/kadikoy-mixing',
  '/kadiköy-muzik',
  '/kadiköy-ses-kayit',
  '/kadiköy-studyo',
  '/mixing',
  '/mastering',
  '/production-support',
  '/ses-kayit',
  '/ucretler',
  '/fiyatlar',
  '/servisler',
  '/sss',
];

function titleFromSlug(slug) {
  return slug
    .replace(/^\//, '')
    .replace(/-/g, ' ')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

for (const slug of slugs) {
  const dir = path.join(base, slug.replace(/^\//, ''));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const title = titleFromSlug(slug);
  const content = `import SeoLandingPage from '@/components/seo-landing-page';\n\nexport const metadata = {\n  title: '${title} - Sunay Music Stüdyo',\n  description: '${title} sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',\n};\n\nexport default function Page() {\n  return (\n    <SeoLandingPage\n      title="${title}"\n      intro="${title} hizmetimiz hakkında hızlı ve etkili bir tanıtım."\n      detail="Bu sayfa, ${title} ile ilgili temel bilgileri, süreci ve avantajları özetler."\n    />\n  );\n}\n`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
}
