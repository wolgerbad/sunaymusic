import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-white/55">
              Servislerimiz
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Aranje',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/production-support.jpg',
              desc: 'Düzenleme, aranje ve yaratıcı yönlendirme desteği.',
              url: '/production-support',
            },
            {
              title: 'Ses Kayıt ',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-ses-kayit.jpg',
              desc: 'Albüm, demo, kendi enstrümanınız ile kayıt hizmetlerimiz vardır. ',
              url: '/ses-kayit',
            },
            {
              title: 'Mixing',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-mixing.jpg',
              desc: 'Parcanin dengesini ve enerjisini koruyan temiz mix.',
              url: '/mixing',
            },
            {
              title: 'Mastering',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-mastering.jpg',
              desc: 'Tum platformlarda guclu ve tutarli son cikis.',
              url: '/mastering',
            },
          ].map((service) => (
            <Link
              href={service.url}
              key={service.title}
              className="card-polish rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm flex flex-col gap-4"
            >
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  fill
                  className="mb-3 text-3xl aspect-square"
                  alt={service.title}
                />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
