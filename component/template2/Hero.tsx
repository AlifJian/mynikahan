import Image from "next/image";

export default function HeroTemplate2() {
    return (
        <section className="section section-alt" id="hero">
            <div className="container text-center">
                {/* Volume Label */}
                <p className="label-text mb-4">Volume I</p>

                {/* Quote */}
                <blockquote
                    className="text-lg md:text-xl text-[#9C8B7A] italic max-w-2xl mx-auto mb-8"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                    untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung
                    dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
                    kasih dan sayang.&rdquo;
                </blockquote>
                <p className="text-sm text-[#C9A962] mb-12">— QS. Ar-Rum: 21</p>

                {/* Ornate Divider */}
                <div className="ornate-divider alt w-64 mx-auto mb-12" />

                {/* Couple Photo */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="arch-top ornate-frame p-2">
                        <Image
                            src="/template2/cover_couple.png"
                            alt="Ahmad dan Siti"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover"
                            style={{ borderRadius: "var(--arch-radius)" }}
                        />
                    </div>
                </div>

                {/* Couple Names */}
                <h2
                    className="text-3xl md:text-5xl text-[#E8DFD4] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Ahmad Rizky Pratama
                </h2>
                <p className="text-2xl md:text-3xl text-[#C9A962] my-3">&</p>
                <h2
                    className="text-3xl md:text-5xl text-[#E8DFD4]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Siti Nurhaliza Putri
                </h2>

                {/* Bismillah */}
                <div className="mt-12">
                    <p className="text-[#9C8B7A] text-sm">
                        Dengan mengharap ridho Allah SWT, kami bermaksud menyelenggarakan
                        resepsi pernikahan putra-putri kami
                    </p>
                </div>
            </div>
        </section>
    );
}
