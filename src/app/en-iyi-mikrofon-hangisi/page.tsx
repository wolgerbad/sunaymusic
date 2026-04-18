import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'En Iyi Mikrofon Hangisi - Sunay Music Stüdyo',
  description: 'En Iyi Mikrofon Hangisi sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="En Iyi Mikrofon Hangisi"
      intro="En Iyi Mikrofon Hangisi hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, En Iyi Mikrofon Hangisi ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
