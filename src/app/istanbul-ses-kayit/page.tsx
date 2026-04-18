import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Istanbul Ses Kayit - Sunay Music Stüdyo',
  description: 'Istanbul Ses Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Istanbul Ses Kayit"
      intro="Istanbul Ses Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Istanbul Ses Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
