import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Ses Kayit - Sunay Music Stüdyo',
  description: 'Ses Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Ses Kayit"
      intro="Ses Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Ses Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
