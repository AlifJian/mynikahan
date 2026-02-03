import { MapPin, Calendar, Clock } from "lucide-react";

export default function EventDetailsTemplate2() {
    return (
        <section className="section" id="event">
            <div className="container text-center">
                {/* Volume Label */}
                <p className="label-text mb-4">Volume IV — Waktu & Tempat</p>

                <h2
                    className="text-3xl md:text-5xl text-[#E8DFD4] mb-8"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Rangkaian Acara
                </h2>

                <div className="ornate-divider w-64 mx-auto mb-12" />

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Akad Nikah */}
                    <div className="card corner-flourish text-center">
                        <p className="label-text text-[10px] mb-4">Akad Nikah</p>

                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-lg text-[#E8DFD4]">Sabtu, 15 Maret 2025</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Clock className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-lg text-[#E8DFD4]">08:00 WIB - Selesai</span>
                        </div>

                        <div className="ornate-divider alt w-32 mx-auto my-4" />

                        <div className="flex items-start justify-center gap-2">
                            <MapPin className="w-5 h-5 text-[#C9A962] mt-1 shrink-0" />
                            <div>
                                <p className="text-[#E8DFD4] font-medium">Masjid Agung Palembang</p>
                                <p className="text-sm text-[#9C8B7A]">
                                    Jl. Jenderal Sudirman No. 123, Palembang
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Resepsi */}
                    <div className="card corner-flourish text-center">
                        <p className="label-text text-[10px] mb-4">Resepsi Pernikahan</p>

                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-lg text-[#E8DFD4]">Sabtu, 15 Maret 2025</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Clock className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-lg text-[#E8DFD4]">11:00 - 14:00 WIB</span>
                        </div>

                        <div className="ornate-divider alt w-32 mx-auto my-4" />

                        <div className="flex items-start justify-center gap-2">
                            <MapPin className="w-5 h-5 text-[#C9A962] mt-1 shrink-0" />
                            <div>
                                <p className="text-[#E8DFD4] font-medium">Grand Ballroom Hotel Aryaduta</p>
                                <p className="text-sm text-[#9C8B7A]">
                                    Jl. Kapten A. Rivai No. 45, Palembang
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Embed */}
                <div className="ornate-frame p-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.284196227153!2d104.7382222!3d-2.9773046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e7e673b969%3A0x83a46f5d2cfc08c1!2sHotel%20Aryaduta%20Palembang!5e0!3m2!1sen!2sid!4v1760000000000!5m2!1sen!2sid"
                        width="100%"
                        height="350"
                        style={{ border: 0, borderRadius: "4px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Resepsi Acara"
                    />
                </div>

                <a
                    href="https://maps.google.com/?q=Hotel+Aryaduta+Palembang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block mt-6"
                >
                    Lihat di Google Maps
                </a>
            </div>
        </section>
    );
}
