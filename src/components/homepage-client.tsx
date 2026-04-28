'use client';

import ContactForm from '@/components/contact-form';
import Services from '@/components/services';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import Gallery from './gallery';

type PortfolioTrack = {
  no: string;
  title: string;
  artist: string;
  src?: string;
  type: string;
  duration: string;
  status: string;
};

export default function HomepageClient() {
  const portfolioTracks: PortfolioTrack[] = [
    {
      no: '01',
      title: 'Midnight Echoes',
      artist: 'Vocal Session - Aylin K.',
      src: '/audio/aud-1.mp3',
      type: 'Pop / Vocal Mix',
      duration: '05:14',
      status: 'Ready',
    },
    {
      no: '02',
      title: 'Asphalt Dreams',
      artist: 'Rap Session - Kobra 34',
      src: '/audio/aud-2.mp3',
      type: 'Trap / Master',
      duration: '03:39',
      status: 'Ready',
    },
    {
      no: '03',
      title: 'Analog Heart',
      artist: 'Band Session - Nova Kids',
      src: '/audio/aud-8.mp3',
      type: 'Indie / Full Prod',
      duration: '02:08',
      status: 'Preview',
    },
    {
      no: '04',
      title: 'Blue Room Take',
      artist: 'Live Room - Eren D.',
      src: '/audio/aud-4.mp3',
      type: 'Karaoke',
      duration: '05:26',
      status: 'Preview',
    },
    {
      no: '05',
      title: 'Blue Room Take',
      artist: 'Live Room - Eren D.',
      src: '/audio/aud-5.mp3',
      type: 'Acoustic / Mix',
      duration: '04:46',
      status: 'Preview',
    },
    {
      no: '06',
      title: 'Blue Room Take',
      artist: 'Live Room - Eren D.',
      src: '/audio/aud-6.mp3',
      type: 'Rap',
      duration: '03:48',
      status: 'Preview',
    },
    {
      no: '07',
      title: 'Blue Room Take',
      artist: 'Live Room - Eren D.',
      src: '/audio/aud-7.mp3',
      type: 'Acoustic / Mix',
      duration: '03:41',
      status: 'Preview',
    },
  ];

  const [currentTrack, setCurrentTrack] = useState<PortfolioTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [total, setTotal] = useState(0);
  const [hideDockedPlayer, setHideDockedPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    const checkBottom = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      // Hide player near footer/end to avoid visual overlap.
      setHideDockedPlayer(viewportBottom > pageHeight - 220);
    };

    checkBottom();
    window.addEventListener('scroll', checkBottom, { passive: true });
    window.addEventListener('resize', checkBottom);

    return () => {
      window.removeEventListener('scroll', checkBottom);
      window.removeEventListener('resize', checkBottom);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
      setElapsed(audio.currentTime);
      setTotal(duration);
      setProgress(duration ? (audio.currentTime / duration) * 100 : 0);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setElapsed(0);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onTimeUpdate);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const playTrack = async (track: PortfolioTrack) => {
    if (!track.src || !audioRef.current) return;
    const audio = audioRef.current;

    if (currentTrack?.no === track.no) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
      return;
    }

    setCurrentTrack(track);
    audio.src = track.src;
    audio.currentTime = 0;
    await audio.play();
    setIsPlaying(true);
  };

  const toggleGlobalPlayback = async () => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const onSeek = (value: number) => {
    if (!audioRef.current || !total) return;
    const nextTime = (value / 100) * total;
    audioRef.current.currentTime = nextTime;
    setElapsed(nextTime);
    setProgress(value);
  };

  return (
    <div>
      <main className="min-h-screen relative">
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
              Sunay Müzik Kayıt ve Prova Stüdyosu
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
                Bizimle İletişime Geçin
              </a>
              <a
                href="#portfolio"
                className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Çalışmalarımızı İncele
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

      <Gallery />
      <Services />

      <section id="portfolio" className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                Çalışmalarımız
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Studio Sample Listesi
              </h2>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm md:p-5">
            <div className="mb-3 hidden grid-cols-[minmax(0,1fr)_88px_88px] gap-3 px-3 py-2 text-xs uppercase tracking-[0.12em] text-white/45 md:grid">
              <span>Track</span>
              <span className="text-right">Sure</span>
            </div>

            <div className="space-y-2">
              {portfolioTracks.map((track) => (
                <article
                  key={track.no}
                  className="group grid grid-cols-1 gap-3 rounded-xl border border-white/8 bg-black/30 px-4 py-4 transition-colors hover:bg-white/8 md:grid-cols-[minmax(0,1fr)_88px_88px] md:items-center"
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => playTrack(track)}
                      disabled={!track.src}
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs transition-colors hover:bg-teal-400/25 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label={`${track.title} sample oynat`}
                    >
                      {currentTrack?.no === track.no && isPlaying ? (
                        <FaPause />
                      ) : (
                        <FaPlay />
                      )}
                    </button>
                    <div>
                      <h3 className="font-medium text-white">
                        {track.no}. {track.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/60">
                        {track.artist}
                      </p>
                      <div className="mt-2 inline-flex rounded-md border border-white/15 bg-white/8 px-2 py-1 text-xs text-white/70">
                        {track.type}
                      </div>
                      {!track.src ? (
                        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-white/45">
                          Audio yakinda eklenecek
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="text-sm text-white/65 md:text-right">
                    {track.duration}
                  </div>
                  <div className="md:text-right"></div>
                </article>
              ))}
            </div>
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

      <ContactForm />

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

      <audio ref={audioRef} preload="none" />
      {currentTrack ? (
        <div
          className={`fixed bottom-3 left-1/2 z-40 w-[min(1100px,calc(100%-1.5rem))] -translate-x-1/2 rounded-2xl border border-white/15 bg-zinc-900/95 px-4 py-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 ${
            hideDockedPlayer
              ? 'translate-y-8 opacity-0 pointer-events-none'
              : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <button
              type="button"
              onClick={toggleGlobalPlayback}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm transition-colors hover:bg-teal-400/25"
              aria-label="Oynat veya duraklat"
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>

            <div className="min-w-0 md:w-64">
              <p className="truncate text-sm font-semibold">
                {currentTrack.title}
              </p>
              <p className="truncate text-xs text-white/60">
                {currentTrack.artist}
              </p>
            </div>

            <div className="flex-1">
              <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={(e) => onSeek(Number(e.target.value))}
                className="w-full accent-teal-300"
                aria-label="Ses kaydi ilerleme cubugu"
              />
              <div className="mt-1 flex items-center justify-between text-[11px] text-white/55">
                <span>{formatTime(elapsed)}</span>
                <span>{formatTime(total || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
