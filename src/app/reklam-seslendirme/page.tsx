import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Reklam Seslendirme - Sunay Music Stüdyo',
  description: 'Reklam Seslendirme sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Reklam Seslendirme"
      intro="Reklam Seslendirme hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Reklam Seslendirme ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
