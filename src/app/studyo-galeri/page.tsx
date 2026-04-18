import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Studyo Galeri - Sunay Music Stüdyo',
  description: 'Studyo Galeri sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Studyo Galeri"
      intro="Studyo Galeri hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Studyo Galeri ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
