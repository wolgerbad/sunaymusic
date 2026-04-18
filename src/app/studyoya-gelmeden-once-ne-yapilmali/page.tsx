import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Studyoya Gelmeden Once Ne Yapilmali - Sunay Music Stüdyo',
  description: 'Studyoya Gelmeden Once Ne Yapilmali sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Studyoya Gelmeden Once Ne Yapilmali"
      intro="Studyoya Gelmeden Once Ne Yapilmali hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Studyoya Gelmeden Once Ne Yapilmali ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
