import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Istanbul Kayit Studyosu - Sunay Music Stüdyo',
  description: 'Istanbul Kayit Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Istanbul Kayit Studyosu"
      intro="Istanbul Kayit Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Istanbul Kayit Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
