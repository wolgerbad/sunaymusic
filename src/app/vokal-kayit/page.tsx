import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Vokal Kayit - Sunay Music Stüdyo',
  description: 'Vokal Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Vokal Kayit"
      intro="Vokal Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Vokal Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
