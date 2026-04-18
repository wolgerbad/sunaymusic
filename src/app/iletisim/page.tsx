import ContactForm from '@/components/contact-form';
import Image from 'next/image';

export const metadata = {
  title: 'İletişim - Sunay Music Stüdyo',
  description:
    'Sunay Music Stüdyo iletişim sayfası. Bizimle hızlıca iletişime geçin ve randevu alın.',
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
              İLETİŞİM
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/85 hero-reveal [animation-delay:170ms]">
              İletişim sayfası üzerinden bize ulaşın ve projeleriniz için
              randevunuzu planlayın.
            </p>
          </div>
        </div>
      </main>
      <div className="bg-zinc-950">
        <ContactForm />
      </div>
    </div>
  );
}
