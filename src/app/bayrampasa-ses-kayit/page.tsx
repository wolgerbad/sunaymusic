import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Bayrampasa Ses Kayit - Sunay Music Stüdyo',
  description: 'Bayrampasa Ses Kayit sayfası hakkında bilgi. Sunay Music Stüdyo hizmetlerimizi keşfedin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Bayrampasa Ses Kayit"
      intro="Bayrampasa Ses Kayit hizmetimiz hakkında hızlı ve etkili bir tanıtım."
      detail="Bu sayfa, Bayrampasa Ses Kayit ile ilgili temel bilgileri, süreci ve avantajları özetler."
    />
  );
}
