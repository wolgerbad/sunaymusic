import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Saatlik Studyo Ucreti - Sunay Music Stüdyo',
  description: 'Saatlik Studyo Ucreti sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Saatlik Studyo Ucreti"
      intro="Saatlik Studyo Ucreti hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Saatlik Studyo Ucreti ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
