import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Kadikoy Kayit Studyosu - Sunay Music Stüdyo',
  description: 'Kadikoy Kayit Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Kadikoy Kayit Studyosu"
      intro="Kadikoy Kayit Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Kadikoy Kayit Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
