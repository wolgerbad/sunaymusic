'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

type GalleryItem = {
  title: string;
  className: string;
  position: string;
  image: string;
  type: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: 'Canli Kayit Seansi',
    className: '',
    position: 'object-[50%_40%]',
    type: 'image',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-3.webp',
  },
  {
    title: 'Control Room Vibes',
    className: '',
    position: 'object-[50%_46%]',
    type: 'image',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-2.webp',
  },
  {
    title: 'Artist Session',
    className: '',
    position: 'object-[52%_38%]',
    type: 'image',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-5.webp',
  },
  {
    title: 'After Session Moments',
    className: '',
    position: 'object-[48%_58%]',
    type: 'image',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-1.jpeg',
  },
  {
    title: 'Live Room Detail',
    className: '',
    position: 'object-[45%_55%]',
    type: 'image',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/social-4.jpg',
  },
  {
    title: 'Session Team',
    className: '',
    position: 'object-[55%_42%]',
    type: 'video',
    image:
      'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/sunaymusic_video.mp4',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

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
          {galleryItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelected(item)}
              className={`card-polish group relative aspect-3/5 overflow-hidden rounded-2xl border border-white/10 text-left cursor-pointer ${item.className}`}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    src={item.image}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl backdrop-blur transition-transform group-hover:scale-110">
                      <FaPlay />
                    </span>
                  </div>
                </>
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${item.position}`}
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40"
              aria-label="Kapat"
            >
              ✕
            </button>
            {selected.type === 'video' ? (
              <video
                src={selected.image}
                controls
                autoPlay
                className="max-h-[85vh] w-auto rounded-2xl shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
