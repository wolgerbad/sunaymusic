import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Kadikoy Studyo - Sunay Music Stüdyo',
  description: 'Kadikoy Studyo sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Kadikoy Studyo"
      intro="Kadikoy Studyo hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Kadikoy Studyo ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
