import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Bayrampasa Studyo - Sunay Music Stüdyo',
  description: 'Bayrampasa Studyo sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Bayrampasa Studyo"
      intro="Bayrampasa Studyo hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Bayrampasa Studyo ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
