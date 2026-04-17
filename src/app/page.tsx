'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <main className="min-h-screen relative">
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur shadow-md py-2 text-black'
              : 'bg-transparent py-2 text-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight">
                Sunay Music Stüdyo
              </span>
            </div>
            <nav className="hidden sm:flex items-center space-x-6 text-base font-medium">
              <a href="#social-proof" className="nav-link-polish">
                Studyodan Kareler
              </a>
              <a href="#portfolio" className="nav-link-polish">
                Portfolyo
              </a>
              <a href="#pricing" className="nav-link-polish">
                Fiyat
              </a>
              <a href="#brands" className="nav-link-polish">
                Referanslar
              </a>
              <a href="#contact" className="nav-link-polish">
                İletişim
              </a>
            </nav>
          </div>
        </header>
        <Image
          src="https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-1.jpg"
          className="absolute inset-0 -z-20 object-cover object-center"
          fill
          priority
          alt="Sunay Music Stüdyo recording room"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/60 to-black/75" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.25),transparent_38%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-28 text-white">
          <div className="max-w-3xl flex flex-col gap-8">
            <h1 className="hero-reveal text-5xl md:text-7xl font-semibold leading-[0.95] [animation-delay:80ms]">
              Parcanin duygusunu kaybetmeden
              <span className="block text-teal-300">mix ve mastering</span>
            </h1>
            <p className="hero-reveal text-lg md:text-xl text-white/90 max-w-2xl [animation-delay:180ms]">
              Sunay Music Studyo, kaydinizin enerjisini koruyarak modern, net ve
              guclu bir sound sunar. Tekli, EP ve album projeleri icin hizli
              teslimat ve acik iletisim.
            </p>
            <div className="hero-reveal flex flex-wrap items-center gap-4 [animation-delay:280ms]">
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Bizimle Iletisime Gecin
              </a>
              <a
                href="#portfolio"
                className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Portfolyoyu Incele
              </a>
            </div>
          </div>
          <ul className="hero-reveal mt-20 grid w-full max-w-3xl grid-cols-1 gap-3 text-white/95 list-none sm:grid-cols-3 [animation-delay:380ms]">
            <li className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.12em] text-white/70">
                Mutlu Musteri
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">100+</p>
            </li>
            <li className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.12em] text-white/70">
                Degerlendirme
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">4.5 / 5</p>
            </li>
            <li className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.12em] text-white/70">
                Teslim Sureci
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">Hizli</p>
            </li>
          </ul>
        </div>
      </main>

      <section id="social-proof" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/60">
                Sosyal Kanit
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Studyodan Gercek Kareler
              </h2>
            </div>
            <p className="max-w-xl text-white/70">
              Musterilerimizle urettigimiz anlardan secmeler. Ortam, enerji ve
              ekip ruhunu gorebilecegin bir galeri.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {[
              {
                title: 'Canli Kayit Seansi',
                className: 'lg:col-span-7 lg:row-span-2 min-h-[280px]',
                position: 'object-[50%_40%]',
              },
              {
                title: 'Control Room Vibes',
                className: 'lg:col-span-5 min-h-[280px]',
                position: 'object-[50%_50%]',
              },
              {
                title: 'Artist Session',
                className: 'lg:col-span-5 min-h-[220px]',
                position: 'object-[52%_38%]',
              },
              {
                title: 'After Session Moments',
                className: 'lg:col-span-7 min-h-[220px]',
                position: 'object-[48%_58%]',
              },
            ].map((item) => (
              <article
                key={item.title}
                className={`card-polish group relative overflow-hidden rounded-2xl border border-white/10 ${item.className}`}
              >
                <Image
                  src="https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunay-1.jpg"
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${item.position}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm uppercase tracking-[0.14em] text-white/60">
                    Sunay Music Studio
                  </p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                Servislerimiz
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Projeye gore net ve guclu teslimler
              </h2>
            </div>
            <p className="max-w-xl text-white/70">
              Kayittan son dokunusa kadar tum surecte yaninizdayiz. Her paket,
              projenin ihtiyacina gore esnek sekilde planlanir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Recording',
                icon: '🎙️',
                desc: 'Akustik olarak optimize odalarda profesyonel kayit.',
              },
              {
                title: 'Mixing',
                icon: '🎚️',
                desc: 'Parcanin dengesini ve enerjisini koruyan temiz mix.',
              },
              {
                title: 'Mastering',
                icon: '🔊',
                desc: 'Tum platformlarda guclu ve tutarli son cikis.',
              },
              {
                title: 'Production Support',
                icon: '🎛️',
                desc: 'Duzenleme, arrangement ve yaratici yonlendirme destegi.',
              },
            ].map((service) => (
              <article
                key={service.title}
                className="card-polish rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 text-3xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                Portfolyo
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Studio Sample Listesi
              </h2>
            </div>
            <p className="max-w-xl text-white/70">
              Buraya studioda kaydedilip mix/master edilen sample calismalarini
              ekleyeceksin. Simdilik modern bir placeholder playlist gorunumu
              hazir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm md:p-5">
            <div className="mb-3 hidden grid-cols-[44px_1.2fr_1fr_100px_90px] gap-3 px-3 py-2 text-xs uppercase tracking-[0.12em] text-white/45 md:grid">
              <span>#</span>
              <span>Track</span>
              <span>Type</span>
              <span>Duration</span>
              <span>Status</span>
            </div>

            <div className="space-y-2">
              {[
                {
                  no: '01',
                  title: 'Midnight Echoes',
                  artist: 'Vocal Session - Aylin K.',
                  type: 'Pop / Vocal Mix',
                  duration: '03:28',
                  status: 'Ready',
                },
                {
                  no: '02',
                  title: 'Asphalt Dreams',
                  artist: 'Rap Session - Kobra 34',
                  type: 'Trap / Master',
                  duration: '02:56',
                  status: 'Ready',
                },
                {
                  no: '03',
                  title: 'Analog Heart',
                  artist: 'Band Session - Nova Kids',
                  type: 'Indie / Full Prod',
                  duration: '04:12',
                  status: 'Preview',
                },
                {
                  no: '04',
                  title: 'Blue Room Take',
                  artist: 'Live Room - Eren D.',
                  type: 'Acoustic / Mix',
                  duration: '03:05',
                  status: 'Preview',
                },
              ].map((track) => (
                <article
                  key={track.no}
                  className="group grid grid-cols-1 gap-3 rounded-xl border border-white/8 bg-black/30 px-4 py-4 transition-colors hover:bg-white/8 md:grid-cols-[44px_1.2fr_1fr_100px_90px] md:items-center"
                >
                  <div className="text-sm font-medium text-white/60">{track.no}</div>

                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs transition-colors group-hover:bg-teal-400/25"
                      aria-label={`${track.title} sample oynat`}
                    >
                      ▶
                    </button>
                    <div>
                      <h3 className="font-medium text-white">{track.title}</h3>
                      <p className="text-sm text-white/60">{track.artist}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="rounded-md border border-white/15 bg-white/8 px-2 py-1">
                      {track.type}
                    </span>
                  </div>

                  <div className="text-sm text-white/65 md:text-right">
                    {track.duration}
                  </div>

                  <div className="md:text-right">
                    <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 text-xs font-medium text-teal-200">
                      {track.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                Fiyatlandirma
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Sample Paket Placeholder
              </h2>
            </div>
            <p className="max-w-xl text-white/70">
              Burada paketlerini net bir sekilde gosterebilirsin. Fiyatlari
              sonra degistirmen icin simdilik modern placeholder kartlar hazir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              {
                name: 'Starter Mix',
                price: '₺2.500',
                detail: 'Single parca / temel mix',
                features: [
                  '1 parca mix',
                  '2 revize hakki',
                  '48 saat teslim',
                  'WAV + MP3 export',
                ],
                cta: 'Paketi Incele',
                featured: false,
              },
              {
                name: 'Artist Pack',
                price: '₺6.500',
                detail: 'EP odakli en populer paket',
                features: [
                  '3 parca mix + master',
                  'Sinirsiz minor revize',
                  'Vokal tuning basic',
                  'Oncelikli teslim',
                ],
                cta: 'En Cok Tercih Edilen',
                featured: true,
              },
              {
                name: 'Signature',
                price: 'Teklif Al',
                detail: 'Album / ozel proje calismalari',
                features: [
                  'Tam prod. danismani',
                  'Kayit + mix + master',
                  'Proje bazli takvim',
                  '1:1 yaratıcı yonlendirme',
                ],
                cta: 'Teklif Isteyin',
                featured: false,
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className={`card-polish rounded-2xl border p-6 backdrop-blur-sm ${
                  plan.featured
                    ? 'border-teal-300/40 bg-teal-300/10'
                    : 'border-white/10 bg-white/4'
                }`}
              >
                <div className="mb-5">
                  <p className="text-sm uppercase tracking-[0.12em] text-white/55">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                  <p className="mt-1 text-sm text-white/65">{plan.detail}</p>
                </div>

                <ul className="space-y-2 text-sm text-white/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 text-teal-300">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-teal-300/85 text-zinc-900 hover:bg-teal-300'
                      : 'border border-white/20 bg-white/8 text-white hover:bg-white/15'
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.14em] text-white/55">
              Referanslar
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Birlikte Urettigimiz Markalar
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-zinc-950 to-transparent" />

            <div className="brand-marquee">
              {[
                'SONIC RECORDS',
                'NOVA LABEL',
                'BPM COLLECTIVE',
                'WAVEFORM MEDIA',
                'CITY SESSIONS',
                'MIDNIGHT FM',
                'LOUDROOM',
                'URBAN TONE',
              ]
                .concat([
                  'SONIC RECORDS',
                  'NOVA LABEL',
                  'BPM COLLECTIVE',
                  'WAVEFORM MEDIA',
                  'CITY SESSIONS',
                  'MIDNIGHT FM',
                  'LOUDROOM',
                  'URBAN TONE',
                ])
                .map((brand, idx) => (
                  <span
                    key={`${brand}-${idx}`}
                    className="inline-flex items-center rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold tracking-[0.12em] text-white/80"
                  >
                    {brand}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                Iletisim
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Projeni Bize Gonder
              </h2>
            </div>
            <p className="max-w-xl text-white/70">
              Formu doldurarak detaylari iletebilirsin. Dilersen direkt WhatsApp
              uzerinden de hizli sekilde ulasabilirsin.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <form className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm md:p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-white/75">Ad Soyad</span>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Orn. Emir Isik"
                    className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal-300/60"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-white/75">E-posta</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ornek@mail.com"
                    className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal-300/60"
                  />
                </label>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-white/75">Hizmet Tipi</span>
                  <select
                    name="serviceType"
                    className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none transition-colors focus:border-teal-300/60"
                    defaultValue="Mixing"
                  >
                    <option className="bg-zinc-900">Recording</option>
                    <option className="bg-zinc-900">Mixing</option>
                    <option className="bg-zinc-900">Mastering</option>
                    <option className="bg-zinc-900">Mix + Master</option>
                    <option className="bg-zinc-900">Diger</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-white/75">Tahmini Butce</span>
                  <input
                    type="text"
                    name="budget"
                    placeholder="Orn. 5.000 - 10.000 TL"
                    className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal-300/60"
                  />
                </label>
              </div>

              <label className="mt-4 flex flex-col gap-2 text-sm">
                <span className="text-white/75">Proje Detayi</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Parca sayisi, tarz, teslim tarihi gibi detaylari yazabilirsin."
                  className="resize-none rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal-300/60"
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex rounded-xl bg-teal-300/90 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-teal-300"
              >
                Talep Gonder
              </button>
            </form>

            <aside className="rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm md:p-6">
              <p className="text-sm uppercase tracking-[0.12em] text-white/55">
                Hemen Ulas
              </p>
              <h3 className="mt-2 text-2xl font-semibold">WhatsApp Destek</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Hizli cevap icin WhatsApp uzerinden yazabilirsin. Genelde ayni
                gun donus yapiyoruz.
              </p>

              <a
                href="https://wa.me/905551112233"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                WhatsApp ile Iletisime Gec
              </a>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-white/70">
                <p>Calisma saatleri</p>
                <p className="mt-1 font-medium text-white">09:00 - 22:00</p>
                <p className="mt-3">E-posta</p>
                <p className="mt-1 font-medium text-white">
                  hello@sunaymusicstudio.com
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="equipment" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                Studio Ekipmanlari
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Gear & Setup Placeholder
              </h2>
            </div>
            <p className="max-w-xl text-white/70">
              Burayi daha sonra kullandigin ekipmanlarla doldurabilirsin.
              Simdilik kategori bazli modern bir placeholder duzeni hazir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Microphones',
                items: ['Neumann U87', 'Shure SM7B', 'Rode NT1-A'],
              },
              {
                title: 'Monitoring',
                items: ['Yamaha HS8', 'KRK Sub', 'Sonarworks Ref'],
              },
              {
                title: 'Outboard & Interface',
                items: ['Apollo Twin', 'Warm Audio EQP', 'DBX 160A'],
              },
              {
                title: 'Instruments & Extras',
                items: ['Nord Stage', 'Fender Jazz Bass', 'Gibson SG'],
              },
            ].map((group) => (
              <article
                key={group.title}
                className="card-polish rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-semibold">Sunay Music Studio</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Istanbul merkezli recording, mixing ve mastering studyo
                hizmetleri.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-white/55">
                Iletisim
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>
                  <a href="tel:+905551112233" className="hover:text-white">
                    +90 555 111 22 33
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@sunaymusicstudio.com"
                    className="hover:text-white"
                  >
                    hello@sunaymusicstudio.com
                  </a>
                </li>
                <li className="text-white/65">Kadikoy / Istanbul</li>
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-white/55">
                Sosyal Medya
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { name: 'Instagram', href: 'https://instagram.com', icon: '◎' },
                  { name: 'YouTube', href: 'https://youtube.com', icon: '▶' },
                  { name: 'Spotify', href: 'https://spotify.com', icon: '♫' },
                  { name: 'TikTok', href: 'https://tiktok.com', icon: '♪' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/6 px-3 py-2 text-xs font-medium text-white/85 transition-colors hover:bg-white/12"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[10px]">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-white/55">
                Hizli Linkler
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>
                  <a href="#services" className="hover:text-white">
                    Servislerimiz
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white">
                    Portfolyo
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Fiyatlandirma
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Iletisim Formu
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} Sunay Music Studio</span>
            <span>Music vibes. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
