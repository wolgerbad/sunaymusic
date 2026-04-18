import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Ev Studyosu Mu Profesyonel Studyomu - Sunay Music Stüdyo',
  description: 'Ev Studyosu Mu Profesyonel Studyomu sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Ev Studyosu Mu Profesyonel Studyomu"
      intro="Ev Studyosu Mu Profesyonel Studyomu hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Ev Studyosu Mu Profesyonel Studyomu ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
