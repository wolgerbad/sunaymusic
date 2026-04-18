import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Sarkicilar Icin Kayit Studyosu - Sunay Music Stüdyo',
  description: 'Sarkicilar Icin Kayit Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Sarkicilar Icin Kayit Studyosu"
      intro="Sarkicilar Icin Kayit Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Sarkicilar Icin Kayit Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
