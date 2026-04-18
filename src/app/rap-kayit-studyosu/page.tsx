import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Rap Kayit Studyosu - Sunay Music Stüdyo',
  description: 'Rap Kayit Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Rap Kayit Studyosu"
      intro="Rap Kayit Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Rap Kayit Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
