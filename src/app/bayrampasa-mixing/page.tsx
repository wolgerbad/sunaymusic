import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Bayrampaşa Mixing - Sunay Music Stüdyo',
  description:
    'Bayrampaşa mixing hizmetimiz. Stüdyo ekipmanları ve mix sürecimiz hakkında bilgi alın.',
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Bayrampaşa Mixing"
      intro="Bayrampaşa stüdyomuzda profesyonel mix hizmetleri sunuyoruz."
      detail="Bayrampaşa'daki mix stüdyomuz, yerli ve uluslararası projelere uygun dinamik ve detaylı mixing çözümleri sunar. Şarkınızın her öğesini net, dengeli ve güçlü bir hale getirmek için titiz bir süreç izliyoruz."
    />
  );
}
