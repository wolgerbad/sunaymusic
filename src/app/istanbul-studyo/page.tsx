import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Istanbul Studyo - Sunay Music Stüdyo',
  description: 'Istanbul Studyo sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Istanbul Studyo"
      intro="Istanbul Studyo hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Istanbul Studyo ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
