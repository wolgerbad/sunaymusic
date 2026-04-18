import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Kadikoy Muzik - Sunay Music Stüdyo',
  description: 'Kadikoy Muzik sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Kadikoy Muzik"
      intro="Kadikoy Muzik hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Kadikoy Muzik ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
