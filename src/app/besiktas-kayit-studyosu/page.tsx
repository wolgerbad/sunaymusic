import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Besiktas Kayit Studyosu - Sunay Music Stüdyo',
  description: 'Besiktas Kayit Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Besiktas Kayit Studyosu"
      intro="Besiktas Kayit Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Besiktas Kayit Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
