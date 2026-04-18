import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Podcast Studyosu - Sunay Music Stüdyo',
  description: 'Podcast Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Podcast Studyosu"
      intro="Podcast Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Podcast Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
