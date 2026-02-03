export default function ThankYouTemplate2() {
    return (
        <section className="section" id="thanks">
            <div className="container text-center">
                {/* Volume Label */}
                <p className="label-text mb-4">Volume VIII — Penutup</p>

                <div className="ornate-frame p-8 md:p-12 max-w-2xl mx-auto bg-[#251E19]/50 rounded">
                    <h2
                        className="text-3xl md:text-5xl text-[#E8DFD4] mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Terima Kasih
                    </h2>

                    <div className="ornate-divider w-48 mx-auto mb-6" />

                    <p
                        className="text-lg text-[#9C8B7A] mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
                        kedua mempelai.
                    </p>

                    <p
                        className="text-[#9C8B7A] mb-8"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                    </p>

                    <div className="ornate-divider alt w-32 mx-auto mb-8" />

                    <p
                        className="text-xl text-[#C9A962] mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
                    </p>

                    <div className="mt-8">
                        <p className="text-[#9C8B7A] text-sm mb-2">Kami yang berbahagia,</p>
                        <p
                            className="text-2xl text-[#E8DFD4]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Ahmad & Siti
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
