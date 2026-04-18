import Map from '@/components/map';
import SeoLandingPage from '@/components/seo-landing-page';

export const metadata = {
  title: 'Şişli Ses Kayıt Stüdyosu - Sunay Music Stüdyo',
  description:
    'Sunay Music Stüdyo Şişli ses kayıt stüdyosu hakkında bilgi ve rezervasyon seçenekleri.',
};

export default function Page() {
  return (
    <>
      <SeoLandingPage
        title="Sisli Ses Kayit Studyosu"
        intro="Şişli ses kayıt stüdyosu için profesyonel ekipman ve konforlu ortam sunuyoruz."
        detail="Bu sayfa, Şişli ses kayıt stüdyosu ile ilgili temel bilgileri, süreci ve avantajları özetler."
      />
      <div className="bg-zinc-950">
        <Map />
      </div>
    </>
  );
}
