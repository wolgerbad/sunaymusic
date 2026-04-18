import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Beat Production - Sunay Music Stüdyo',
  description: 'Beat Production sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Beat Production"
      intro="Beat Production hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Beat Production ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
