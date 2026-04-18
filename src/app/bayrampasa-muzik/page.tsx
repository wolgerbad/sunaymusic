import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Bayrampasa Muzik - Sunay Music Stüdyo',
  description: 'Bayrampasa Muzik sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Bayrampasa Muzik"
      intro="Bayrampasa Muzik hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Bayrampasa Muzik ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
