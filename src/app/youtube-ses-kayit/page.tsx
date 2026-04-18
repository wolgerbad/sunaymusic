import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Youtube Ses Kayit - Sunay Music Stüdyo',
  description: 'Youtube Ses Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Youtube Ses Kayit"
      intro="Youtube Ses Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Youtube Ses Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
