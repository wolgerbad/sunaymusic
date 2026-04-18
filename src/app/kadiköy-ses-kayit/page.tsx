import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Kadikoy Ses Kayit - Sunay Music Stüdyo',
  description: 'Kadikoy Ses Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Kadikoy Ses Kayit"
      intro="Kadikoy Ses Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Kadikoy Ses Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
