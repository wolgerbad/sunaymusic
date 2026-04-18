import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Paketler - Sunay Music Stüdyo',
  description: 'Paketler sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Paketler"
      intro="Paketler hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Paketler ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
