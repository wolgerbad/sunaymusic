import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Mixing - Sunay Music Stüdyo',
  description:
    'Sunay Music Stüdyo mixing sayfası. Mix sürecimiz ve hizmet detaylarımız hakkında bilgi alın.',
};

export default function Page() {
  return (
    <div className="text-white">
      <main className="relative min-h-[60vh]">
        <Image
          src="https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-1.jpg"
          className="absolute inset-0 -z-20 object-cover object-center"
          fill
          priority
          alt="Sunay Music Stüdyo recording room"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/60 to-black/75" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.25),transparent_38%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-20 text-white">
          <div className="w-full flex items-center flex-col gap-6 text-center">
            <p className="hero-reveal text-sm uppercase tracking-[0.16em] text-white/65 [animation-delay:30ms]">
              Sunay Music Studio
            </p>
            <h1 className="mx-auto hero-reveal text-5xl md:text-7xl font-semibold leading-[0.95] [animation-delay:80ms]">
              Mixing
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/85 hero-reveal [animation-delay:170ms]">
              Mixing, aranjör idk idk idk.
            </p>
          </div>
        </div>
      </main>
      <section className="bg-zinc-950 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Profesyonel Mixing Süreci
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed max-w-5xl">
              Sunay Music Studio&apos;da mixing oturumları, şarkının tarzına ve
              vokal/performans ihtiyacina gore planlanır. Amacımız, doğal
              performansı koruyup temiz ve güçlü bir kayıt zemini oluşturmaktır.
              Sonraki aşamada mix ve mastering sürecini de tek akışta
              ilerletebiliriz.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Link
                href="/servisler"
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
              >
                Tüm Servisleri İncele
              </Link>
              <Link
                href="/fiyatlar"
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
              >
                Fiyatları Gör
              </Link>
              <Link
                href="/iletisim"
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
              >
                Kayıt Randevusu Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
