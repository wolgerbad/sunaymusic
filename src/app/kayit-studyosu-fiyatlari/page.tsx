import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Kayit Studyosu Fiyatlari - Sunay Music Stüdyo',
  description: 'Kayit Studyosu Fiyatlari sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Kayit Studyosu Fiyatlari"
      intro="Kayit Studyosu Fiyatlari hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Kayit Studyosu Fiyatlari ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
