import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Mix Mastering Fiyatlari - Sunay Music Stüdyo',
  description: 'Mix Mastering Fiyatlari sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Mix Mastering Fiyatlari"
      intro="Mix Mastering Fiyatlari hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Mix Mastering Fiyatlari ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
