import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Ekipmanlarimiz - Sunay Music Stüdyo',
  description: 'Ekipmanlarimiz sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Ekipmanlarimiz"
      intro="Ekipmanlarimiz hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Ekipmanlarimiz ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
