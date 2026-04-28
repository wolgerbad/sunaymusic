import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="social-proof" className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Stüdyodan Kareler
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            {
              title: 'Canli Kayit Seansi',
              className: '',
              position: 'object-[50%_40%]',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-3.webp',
            },
            {
              title: 'Control Room Vibes',
              className: '',
              position: 'object-[50%_46%]',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-2.webp',
            },
            {
              title: 'Artist Session',
              className: '',
              position: 'object-[52%_38%]',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-5.webp',
            },
            {
              title: 'After Session Moments',
              className: '',
              position: 'object-[48%_58%]',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-1.jpeg',
            },
            {
              title: 'Live Room Detail',
              className: '',
              position: 'object-[45%_55%]',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-4.jpg',
            },
            {
              title: 'Session Team',
              className: '',
              position: 'object-[55%_42%]',
              image:
                'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-6.jpeg',
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`card-polish group relative aspect-3/5 overflow-hidden rounded-2xl border border-white/10 ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${item.position}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
