import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Istanbul Mixing - Sunay Music Stüdyo',
  description:
    'İstanbul için mixing hizmetimiz. Tecrübeli mühendislerimizle şarkınızı profesyonelce mixleyin.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="İstanbul Mixing"
      intro="İstanbul genelinde profesyonel mix hizmetleri sağlıyoruz."
      detail="İstanbul'daki miksaj hizmetimiz, şarkınızı dinamik, temiz ve radyo ready hale getirmek için uyarlanmış bir süreç içerir. Her proje için özel ayarlar ve yaratıcılık odaklı bir yaklaşım sunuyoruz."
    />
  );
}
