import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Production Support - Sunay Music Stüdyo',
  description: 'Production Support sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Production Support"
      intro="Production Support hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Production Support ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
