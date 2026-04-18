import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Referanslar - Sunay Music Stüdyo',
  description: 'Referanslar sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Referanslar"
      intro="Referanslar hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Referanslar ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
