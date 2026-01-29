"use client";

import { useState } from "react";
import "@/styles/landingPage.css"

// --- ICONS ---
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const MobileIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  </svg>
);

const MusicIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.593L16 14.25V7.5l-6.433 1.74m0 0a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.593L9 9z"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

// --- COMPONENTS ---

// Accordion untuk FAQ
const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-stone-700 hover:text-rose-800 transition"
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}
      >
        <p className="text-sm text-stone-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-600">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-stone-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            {/* Logo Icon with Maroon Gradient */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-700 to-red-900 text-white font-bold shadow-sm">
              N
            </div>
            <span className="text-xl font-bold text-stone-800">
              My<span className="text-rose-800">Nikahan</span>.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#fitur"
              className="text-sm font-medium hover:text-rose-800 transition"
            >
              Fitur
            </a>
            <a
              href="#tema"
              className="text-sm font-medium hover:text-rose-800 transition"
            >
              Tema
            </a>
            <a
              href="#harga"
              className="text-sm font-medium hover:text-rose-800 transition"
            >
              Harga
            </a>
            <button className="rounded-full bg-rose-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-rose-800 hover:shadow-md">
              Buat Undangan
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background Blobs (Warmer tones) */}
        <div className="absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-orange-50/60 blur-3xl -translate-x-1/4"></div>

        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold text-rose-800 border border-rose-100">
              ✨ Jasa Undangan Digital Premium
            </span>
            <h1 className="text-5xl font-bold leading-tight text-stone-800 lg:text-6xl">
              Kabar Bahagia Jadi Lebih Berkesan &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-800 italic">
                Elegan.
              </span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Solusi undangan pernikahan digital yang mewah, praktis, dan siap
              disebar via WhatsApp. Hemat waktu dan biaya dengan hasil yang
              memukau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button className="rounded-full bg-rose-800 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-rose-200/50 transition hover:bg-rose-900 hover:-translate-y-1">
                Lihat Contoh Website
              </button>
              <button className="rounded-full bg-white border-2 border-stone-200 px-8 py-4 text-sm font-bold text-stone-700 transition hover:border-rose-300 hover:text-rose-800 hover:bg-rose-50">
                Konsultasi Gratis
              </button>
            </div>
          </div>

          {/* Hero Visual (Phone Mockup) */}
          <div className="relative flex justify-center lg:justify-end my-8 lg:my-0">
            {/* Phone Frame */}
            <div className="relative h-[580px] w-[310px] rounded-[3.5rem] border-[10px] border-stone-800 bg-stone-800 shadow-2xl z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 h-7 w-36 -translate-x-1/2 rounded-b-2xl bg-stone-800 z-20"></div>
              {/* Screen Content */}
              <div className="h-full w-full overflow-hidden rounded-[3rem] bg-white relative">
                {/* Mockup Image with Warmer Tones */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&auto=format&fit=crop&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-black/20 flex flex-col items-center justify-center text-white p-8 text-center">
                    <p className="font-serif italic text-xl mb-3 text-rose-200">
                      The Wedding of
                    </p>
                    <h2 className="font-serif text-4xl font-bold mb-4">
                      Bima & Ayu
                    </h2>
                    <div className="h-px w-16 bg-rose-300 mb-4"></div>
                    <div className="text-sm uppercase tracking-[0.2em] mb-10">
                      Sabtu, 28 . 08 . 2026
                    </div>
                    <button className="bg-rose-800/80 backdrop-blur-md border border-rose-500/30 px-8 py-3 rounded-full text-sm font-medium shadow-lg">
                      Buka Undangan
                    </button>
                  </div>
                </div>
                {/* Floating Music Icon */}
                <div className="absolute bottom-8 right-6 h-12 w-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
                  <MusicIcon className="h-6 w-6 text-rose-700" />
                </div>
              </div>
            </div>
            {/* Decorative Circle behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] bg-rose-50 rounded-full -z-10 blur-3xl opacity-70"></div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="bg-white py-24" id="fitur">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800">
              Fitur Premium Undangan
            </h2>
            <p className="mt-4 text-stone-600">
              Kami memastikan undangan Anda tidak hanya cantik, tapi juga
              fungsional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Responsive Design",
                desc: "Tampilan sempurna di layar HP tamu undangan Anda.",
                icon: <MobileIcon className="h-6 w-6" />,
              },
              {
                title: "Backsound Romantis",
                desc: "Pilih lagu kenangan Anda sebagai pengiring undangan.",
                icon: <MusicIcon className="h-6 w-6" />,
              },
              {
                title: "Sistem RSVP",
                desc: "Konfirmasi kehadiran tamu otomatis masuk ke database.",
                icon: <CheckCircleIcon className="h-6 w-6" />,
              },
              {
                title: "Navigasi Lokasi",
                desc: "Tombol langsung ke Google Maps menuju venue acara.",
                icon: (
                  <div className="h-6 w-6 rounded-full border-2 border-current flex items-center justify-center font-bold text-[10px]">
                    G
                  </div>
                ),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-rose-200 hover:bg-rose-50/60 transition duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-800 mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-stone-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THEMES SHOWCASE --- */}
      <section className="py-24 bg-stone-50" id="tema">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-800">
                Koleksi Tema Eksklusif
              </h2>
              <p className="mt-2 text-stone-600">
                Berbagai pilihan gaya, dari tradisional modern hingga minimalis
                elegan.
              </p>
            </div>
            <a
              href="#"
              className="text-rose-800 font-bold text-sm hover:underline mt-4 md:mt-0 flex items-center gap-1"
            >
              Lihat Katalog Lengkap &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Theme Card 1 - Maroon Vibe */}
            <div className="group rounded-2xl bg-white p-3 shadow-sm hover:shadow-xl transition duration-300 ring-1 ring-stone-100 hover:ring-rose-200">
              <div className="h-72 rounded-xl bg-rose-900 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1532348258821-202b3d3649ad?auto=format&fit=crop&w=500&q=60"
                  className="w-full h-full object-cover opacity-80 transition transform group-hover:scale-105 mix-blend-overlay"
                  alt="Maroon Theme"
                />
                <div className="absolute top-3 right-3 bg-rose-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-rose-50 border border-rose-700">
                  CLASSIC RED
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-800 text-xl">
                  Velvet Maroon
                </h3>
                <p className="text-sm text-stone-500 mt-2">
                  Kesan mewah dengan dominasi warna merah hati dan emas.
                </p>
              </div>
            </div>

            {/* Theme Card 2 - Floral */}
            <div className="group rounded-2xl bg-white p-3 shadow-sm hover:shadow-xl transition duration-300 ring-1 ring-stone-100 hover:ring-rose-200">
              <div className="h-72 rounded-xl bg-rose-100 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1459909633680-206dc5c67abb?auto=format&fit=crop&w=500&q=60"
                  className="w-full h-full object-cover opacity-90 transition transform group-hover:scale-105"
                  alt="Floral Theme"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-600">
                  FLORAL
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-800 text-xl">
                  Blush & Bloom
                </h3>
                <p className="text-sm text-stone-500 mt-2">
                  Sentuhan bunga-bunga lembut yang romantis.
                </p>
              </div>
            </div>

            {/* Theme Card 3 - Minimal */}
            <div className="group rounded-2xl bg-white p-3 shadow-sm hover:shadow-xl transition duration-300 ring-1 ring-stone-100 hover:ring-rose-200">
              <div className="h-72 rounded-xl bg-stone-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1605209268822-34940f7fb8f9?auto=format&fit=crop&w=500&q=60"
                  className="w-full h-full object-cover opacity-90 transition transform group-hover:scale-105"
                  alt="Minimal Theme"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-600">
                  MODERN
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-800 text-xl">
                  Elegant Minimalist
                </h3>
                <p className="text-sm text-stone-500 mt-2">
                  Simpel, bersih, fokus pada tipografi yang indah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="bg-white py-24" id="harga">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Paket Harga Terbaik
          </h2>
          <p className="text-stone-600 mb-12">
            Investasi sekali untuk momen sekali seumur hidup. Tanpa biaya
            tersembunyi.
          </p>

          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 items-center">
            {/* Basic */}
            <div className="border border-stone-200 rounded-3xl p-8 hover:border-rose-300 transition hover:shadow-lg">
              <h3 className="font-bold text-lg text-stone-700">Paket Silver</h3>
              <div className="text-4xl font-bold text-rose-800 my-5">
                149 Ribu
              </div>
              <ul className="text-sm text-stone-600 space-y-4 mb-8 text-left">
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> 1 Pilihan
                  Tema Basic
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> Kuota 300
                  Tamu
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> Masa Aktif 1
                  Minggu
                </li>
                <li className="flex gap-3 items-center text-stone-400">
                  <CheckCircleIcon className="w-5" />{" "}
                  <span className="line-through">Fitur Kirim Ucapan</span>
                </li>
              </ul>
              <button className="hover:cursor-pointer w-full py-3 rounded-xl border-2 border-stone-200 text-stone-700 font-bold hover:bg-stone-50 hover:border-stone-300 transition">
                Pilih Silver
              </button>
            </div>

            {/* Best Value - Maroon Highlight */}
            <div className="border-2 border-rose-800 bg-rose-50/60 rounded-3xl p-8 relative transform md:-translate-y-6 shadow-xl shadow-rose-100">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-800 text-white text-sm font-bold px-6 py-2 rounded-full tracking-wider shadow-md">
                TERLARIS
              </div>
              <h3 className="font-bold text-xl text-stone-800">Paket Gold</h3>
              <div className="text-5xl font-bold text-rose-900 my-5">
                249 Ribu
              </div>
              <ul className="text-sm text-stone-700 space-y-4 mb-10 text-left font-medium">
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-700" /> Akses Semua
                  Tema Premium
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-700" />{" "}
                  <span className="font-bold">
                    Tamu Tanpa Batas (Unlimited)
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-700" /> Masa Aktif 1
                  Bulan
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-700" /> Fitur RSVP &
                  Ucapan
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-700" /> Custom Musik
                  Pilihan
                </li>
              </ul>
              <button className="hover:cursor-pointer w-full py-4 rounded-xl bg-gradient-to-r from-rose-800 to-red-900 text-white font-bold hover:shadow-lg hover:from-rose-900 hover:to-red-950 transition">
                Pilih Gold (Recommended)
              </button>
            </div>

            {/* Platinum */}
            <div className="border border-stone-200 rounded-3xl p-8 hover:border-rose-300 transition hover:shadow-lg">
              <h3 className="font-bold text-lg text-stone-700">
                Paket Platinum
              </h3>
              <div className="text-4xl font-bold text-rose-800 my-5">
                349 Ribu
              </div>
              <ul className="text-sm text-stone-600 space-y-4 mb-8 text-left">
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> Semua Fitur
                  Paket Gold
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" />{" "}
                  <span className="font-bold">Custom Domain (.my.id)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> Prioritas
                  Pengerjaan
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> Hapus
                  Watermark
                </li>
              </ul>
              <button className="hover:cursor-pointer w-full py-3 rounded-xl border-2 border-stone-200 text-stone-700 font-bold hover:bg-stone-50 hover:border-stone-300 transition">
                Pilih Platinum
              </button>
            </div>

            <div></div>

            <div className="border border-stone-200 rounded-3xl p-8 hover:border-rose-300 transition hover:shadow-lg">
              <h3 className="font-bold text-lg text-stone-700">Paket Custom</h3>
              <div className="text-4xl font-bold text-rose-800 my-5">----</div>
              <ul className="text-sm text-stone-600 space-y-4 mb-8 text-left">
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" /> Semua Fitur
                  Paket Platinum
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" />{" "}
                  <span className="font-bold">Request Design</span>
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircleIcon className="w-5 text-rose-500" />
                  Revisi Design 3x
                </li>
              </ul>
              <a href="#footer" className="hover:cursor-pointer">
                <button className="hover:cursor-pointer w-full py-3 rounded-xl border-2 border-stone-200 text-stone-700 font-bold hover:bg-stone-50 hover:border-stone-300 transition">
                  Hubungi Kami
                </button>
              </a>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-center text-stone-600 mb-12">
            Beberapa hal yang sering ditanyakan calon pengantin.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
            <FaqItem
              question="?"
              answer="Sangat aman. Data RSVP dan ucapan hanya bisa diakses oleh Anda sebagai pemilik undangan. Kami tidak akan menyebarkan data tersebut."
            />
            <FaqItem
              question="Apakah saya bisa revisi jika ada kesalahan ketik?"
              answer="Tentu saja. Anda memiliki akses dashboard untuk mengedit detail acara, foto, dan teks kapan saja tanpa batas, bahkan setelah undangan disebar."
            />
            <FaqItem
              question="Berapa lama proses pengerjaannya?"
              answer="Jika materi (foto, data acara) sudah lengkap, undangan bisa selesai dalam waktu 1x24 jam. Untuk paket Platinum dengan custom domain mungkin butuh waktu 2-3 hari kerja."
            />
          </div>
        </div>
      </section>

      {/* --- CTA & FOOTER --- */}
      <footer className="bg-stone-900 text-stone-300 py-16" id="footer">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Siap Membuat Undangan <br /> Impian Anda?
          </h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis atau langsung pesan
            paket yang Anda butuhkan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="rounded-full bg-rose-800 px-8 py-4 font-bold text-white hover:bg-rose-900 transition shadow-lg shadow-rose-900/30">
              Pesan Sekarang via WhatsApp
            </button>
            <button className="rounded-full bg-transparent border border-stone-600 px-8 py-4 font-bold text-stone-300 hover:bg-stone-800 hover:border-stone-500 transition">
              Lihat Portofolio Lainnya
            </button>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p className="mb-4 md:mb-0">
              &copy; 2026 MyNikahan Undangan Digital.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-rose-400 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-rose-400 transition">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-rose-400 transition">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
