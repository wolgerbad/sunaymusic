import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Mix Mastering - Sunay Music Stüdyo',
  description: 'Mix Mastering sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Mix Mastering"
      intro="Mix Mastering hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Mix Mastering ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
