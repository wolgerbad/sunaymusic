import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Bayrampasa Kayit Studyosu - Sunay Music Stüdyo',
  description: 'Bayrampasa Kayit Studyosu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Bayrampasa Kayit Studyosu"
      intro="Bayrampasa Kayit Studyosu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Bayrampasa Kayit Studyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
