import Breadcrumb from './breadcrumb';
import Map from './map';

export default function ContactForm() {
  return (
    <section id="contact" className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Breadcrumb />
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-white/55">
              iletişim
            </p>
          </div>
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
                <span className="text-white/75">Telefon Numarası</span>
                <input
                  type="text"
                  name="phone"
                  placeholder="+90 -"
                  className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal-300/60"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="text-white/75">Konu</span>
                <input
                  type="text"
                  name="konu"
                  placeholder="Konu"
                  className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal-300/60"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2 text-sm">
              <span className="text-white/75">Mesaj</span>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="mesajınız buraya.."
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
              Hizli cevap icin WhatsApp uzerinden yazabilirsin. Genelde ayni gun
              donus yapiyoruz.
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
        <div>
          <Map />
        </div>
      </div>
    </section>
  );
}
