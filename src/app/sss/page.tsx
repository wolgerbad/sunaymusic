import type { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular - Sunay Music Stüdyo',
  description:
    'Sunay Music Stüdyo hakkında sık sorulan sorular ve cevapları. Kayıt stüdyosu, mixing, mastering ve müzik prodüksiyonu hakkında bilgi edinin.',
  keywords:
    'SSS, sık sorulan sorular, kayıt stüdyosu, mixing, mastering, müzik prodüksiyonu',
};

const faqs = [
  {
    question: 'Sunay Music Stüdyo nedir?',
    answer:
      "Sunay Music Stüdyo, İstanbul'da profesyonel müzik kayıt, mixing ve mastering hizmetleri sunan modern bir stüdyodur. Band kayıtları, vokal kayıtları, podcast kayıtları ve beat prodüksiyonu gibi çeşitli hizmetler sağlıyoruz.",
  },
  {
    question: 'Stüdyo saatlik ücreti ne kadar?',
    answer:
      "Stüdyo kullanım ücretleri projenize ve seçtiğiniz hizmete göre değişir. Saatlik ücretler 150 TL'den başlar. Detaylı fiyat bilgisi için lütfen fiyatlar sayfamızı inceleyin veya bizimle iletişime geçin.",
  },
  {
    question: 'Hangi ekipmanları kullanıyorsunuz?',
    answer:
      'Stüdyomuzda profesyonel mikrofonlar (Neumann, AKG, Shure), ses kartları (Universal Audio, Focusrite), monitörler (Genelec, Adam Audio) ve çeşitli efekt üniteleri bulunmaktadır. Ekipman listemiz için ekipmanlar sayfamızı ziyaret edin.',
  },
  {
    question: 'Mixing ve mastering hizmeti sunuyor musunuz?',
    answer:
      'Evet, profesyonel mixing ve mastering hizmetleri sunuyoruz. Deneyimli mühendislerimizle kayıtlarınızı en iyi şekilde işliyoruz. Mixing paketleri ve mastering fiyatları için ilgili sayfalarımızı inceleyin.',
  },
  {
    question: 'Podcast kayıtları için uygun musunuz?',
    answer:
      'Kesinlikle! Podcast kayıtları için özel olarak tasarlanmış odamız ve ekipmanlarımız bulunmaktadır. Net ve kaliteli ses kaydı garantisiyle podcast projelerinizi gerçekleştiriyoruz.',
  },
  {
    question: 'Randevu nasıl alabilirim?',
    answer:
      'İletişim sayfamızdan form doldurarak veya telefon/whatsapp ile bize ulaşarak randevu alabilirsiniz. Müsaitlik durumumuza göre en kısa sürede size dönüş yapıyoruz.',
  },
  {
    question: 'Stüdyoya gelmeden önce ne hazırlamalıyım?',
    answer:
      'Kayıt için şarkılarınızı, sözlerinizi ve varsa demo kayıtlarınızı hazırlayın. Müzik aletlerinizi ve ekipmanlarınızı getirin. Detaylı bilgi için "Stüdyoya Gelmeden Önce Ne Yapılmalı" sayfamızı inceleyin.',
  },
  {
    question: 'Çocuklar için kayıt yapabilir miyim?',
    answer:
      'Evet, çocuk kayıtları için özel yaklaşımımız vardır. Rahat ve eğlenceli bir ortamda kayıt yapıyoruz. Aile kayıtları ve çocuk şarkıları için uygunuz.',
  },
  {
    question: 'Paket hizmetleriniz var mı?',
    answer:
      'Evet, çeşitli paket seçeneklerimiz bulunmaktadır. Kayıt + Mixing, Kayıt + Mixing + Mastering gibi kombine paketlerle ekonomik çözümler sunuyoruz. Paketler sayfamızı inceleyin.',
  },
  {
    question: 'Hangi bölgelerde hizmet veriyorsunuz?',
    answer:
      "İstanbul'un çeşitli bölgelerinde (Kadıköy, Bayrampaşa, Beşiktaş, Şişli vb.) hizmet veriyoruz. Ana stüdyomuz Kadıköy'dedir ancak mobil kayıt hizmetleri de sunabiliyoruz.",
  },
];

const generateFAQStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export default function SSSPage() {
  const structuredData = generateFAQStructuredData();

  return (
    <div className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
                Sık Sorulan Sorular
              </h1>
              <p className="max-w-3xl text-base md:text-lg text-white/85 hero-reveal [animation-delay:170ms]">
                Sunay Music Stüdyo hakkında sık sorulan sorular ve cevapları.
              </p>
            </div>
          </div>
        </main>
      </div>

      <section className="bg-zinc-950 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb />
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8 backdrop-blur-sm"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {faq.question}
                </h2>
                <p className="text-white/75 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Başka Sorularınız Var mı?
              </h3>
              <p className="text-white/75 mb-6">
                Yukarıdaki sorular dışında merak ettiğiniz bir konu varsa,
                lütfen bizimle iletişime geçin.
              </p>
              <a
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
