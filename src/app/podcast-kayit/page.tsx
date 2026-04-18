import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Podcast Kayit - Sunay Music Stüdyo',
  description: 'Podcast Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Podcast Kayit"
      intro="Podcast Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Podcast Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
