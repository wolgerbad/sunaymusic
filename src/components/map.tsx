export default function Map() {
  return (
    <div className="max-w-7xl mx-auto pt-10 rounded-2xl bg-black/25 p-1">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4364730054363!2d28.900722075861236!3d41.05945097134342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab147d7378e5f%3A0xc6384c590cfd0d5e!2sSunay%20Music%20Studio!5e0!3m2!1str!2str!4v1776497968452!5m2!1str!2str"
          title="Sunay Music Studio Haritası"
          className="h-80 w-full border-0"
          loading="lazy"
        />
      </div>
      <div className="mt-4 rounded-b-2xl border-t border-white/10 bg-zinc-950 px-6 py-5 text-sm text-white/70">
        <p className="font-semibold text-white">Adres</p>
        <p>
          Dostlar İş Merkezi, Kartaltepe, Gülseren Sk. no:2, 34040
          Bayrampaşa/İstanbul
        </p>
      </div>
    </div>
  );
}
