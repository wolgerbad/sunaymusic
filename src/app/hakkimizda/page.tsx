import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Hakkimizda - Sunay Music Stüdyo',
  description: 'Hakkimizda sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Hakkimizda"
      intro="Hakkimizda hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Hakkimizda ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
