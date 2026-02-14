import Image from "next/image";

export default function BrideTemplate2() {
    return (
        <section className="section section-alt" id="bride">
            <div className="container">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                    {/* Info */}
                    <div className="flex-1 text-center md:text-right">
                        <p className="label-text mb-4">Volume III — Mempelai Wanita</p>

                        <h2
                            className="text-3xl md:text-4xl text-[#E8DFD4] mb-4"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Siti Nurhaliza Putri, S.Pd.
                        </h2>

                        <div className="ornate-divider w-48 mx-auto md:!ml-auto md:!mr-0 my-6" />

                        <p className="text-[#9C8B7A] mb-2" style={{ fontFamily: "var(--font-body)" }}>
                            Putri Pertama dari
                        </p>
                        <p className="text-lg text-[#E8DFD4] mb-1">
                            Bapak <span className="text-[#C9A962]">H. Abdullah Rahman</span>
                        </p>
                        <p className="text-[#9C8B7A] mb-1">&</p>
                        <p className="text-lg text-[#E8DFD4]">
                            Ibu <span className="text-[#C9A962]">Hj. Aisyah Maharani</span>
                        </p>

                        <div className="ornate-divider alt w-32 mx-auto md:!ml-auto md:!mr-0 my-6" />

                        <p className="text-sm text-[#9C8B7A] italic">
                            Palembang, Sumatera Selatan
                        </p>
                    </div>

                    {/* Photo */}
                    <div className="flex-1 max-w-sm">
                        <div className="arch-top ornate-frame p-2">
                            <Image
                                src="/template2/bride.png"
                                alt="Mempelai Wanita"
                                width={400}
                                height={600}
                                className="w-full h-auto object-cover"
                                style={{ borderRadius: "var(--arch-radius)" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
