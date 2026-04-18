import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Portfolyo - Sunay Music Stüdyo',
  description: 'Portfolyo sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Portfolyo"
      intro="Portfolyo hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Portfolyo ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
