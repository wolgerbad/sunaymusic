import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Istanbul Muzik - Sunay Music Stüdyo',
  description: 'Istanbul Muzik sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Istanbul Muzik"
      intro="Istanbul Muzik hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Istanbul Muzik ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
