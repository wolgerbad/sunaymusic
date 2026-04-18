import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Ucretler - Sunay Music Stüdyo',
  description: 'Ucretler sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Ucretler"
      intro="Ucretler hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Ucretler ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
