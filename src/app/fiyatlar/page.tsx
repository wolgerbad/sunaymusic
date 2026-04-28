import Image from 'next/image';

const services = [
  {
    name: 'Ses Kayıt',
    description:
      'Yüksek standartlara ve tecrübeye sahip stüdyomuzda samimi bir atmosferde müziklerinizi en hassas ve detaycı bir yaklaşımla kaydediyoruz.',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-ses-kayit.jpg',
    price: '2000 TL / saat',
  },
  {
    name: 'Mixing',
    description:
      'Bugüne dek, bir çok alternatif müzik üreten sanatçı ya da gruplara yüksek tirajlar getiren projelerin mix çalışmaları stüdyomuzda gerçekleşmiştir. 32 kanal üzeri için fiyat sorunuz.',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-mixing.jpg',
    price: '20000 TL / eser',
  },
  {
    name: 'Mastering',
    description:
      'Birinci sınıf teknik ekipmanımız ve tecrübemizle, mixlerinizin kalitesi bozulmadan yayıma hazırlanması için özenle çalışıyoruz.',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-mastering.jpg',
    price: '5000 TL / eser',
  },
];

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
              FİYATLARIMIZ
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/85 hero-reveal [animation-delay:170ms]">
              Projeleriniz için şeffaf, net ve sürdürülebilir fiyatlandırma.
              Aşağıdaki paketler başlangıç noktasıdır; proje kapsamına göre
              birlikte esnetebiliriz.
            </p>
          </div>
        </div>
      </main>

      <section className="py-20 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8 text-white/80 leading-relaxed">
            <h2 className="text-base md:text-lg font-medium text-white">
              Uzun süreli rezervasyonlarınız için fiyatlarımızda daha esnek
              olabiliriz. Bizim tutkumuz alternatif müzikler üreten
              müzisyenlerin özgün ve etkileyici ses kayıtları yapmasına destek
              olmaktır. Projelerinizin kaliteden ödün vermeden olabildiğince
              ekonomik sonlandırılabilmesi için mutlaka bizi ziyaret edin.
              Şartlarınız ve hayallerinizi bizimle paylaşırsanız, tecrübemiz ve
              yönlendirmelerimizle çok daha avantajlı sonuçlar elde
              edebileceğinizi unutmayın. Aşağıdaki listede fiyatlarımız KDV
              hariç olarak düzenlenmiştir.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="card-polish group rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
              >
                <div className="relative h-52 w-full overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    fill
                    className="absolute object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={service.name}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-200">
                    {service.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
