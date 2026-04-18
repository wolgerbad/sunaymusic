import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Band Prova Kayit - Sunay Music Stüdyo',
  description: 'Band Prova Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Band Prova Kayit"
      intro="Band Prova Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Band Prova Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
