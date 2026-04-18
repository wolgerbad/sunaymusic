import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Kadıköy Mixing - Sunay Music Stüdyo',
  description:
    'Kadıköy mixing hizmetimiz. Stüdyo kalitesi ve kişiye özel mix çözümleri ile tanışın.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Kadıköy Mixing"
      intro="Kadıköy stüdyomuzda modern ve detaylı mixing hizmetleri sunuyoruz."
      detail="Kadıköy'deki miksaj hizmetimiz, şarkınıza profesyonel parlaklık ve denge kazandırmak için tasarlanmıştır. Hafif, orta ve ağır mix tarzlarına uygun esnek bir süreç izliyoruz."
    />
  );
}
