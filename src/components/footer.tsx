export default function Footer() {
  return (
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
                {
                  name: 'Instagram',
                  href: 'https://instagram.com',
                  icon: '◎',
                },
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
  );
}
