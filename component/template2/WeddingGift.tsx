"use client";

import { useState } from "react";
import { Copy, Check, CreditCard, Smartphone } from "lucide-react";

interface GiftItem {
    type: "bank" | "ewallet";
    name: string;
    number: string;
    holder: string;
}

const giftItems: GiftItem[] = [
    {
        type: "bank",
        name: "Bank BCA",
        number: "1234567890",
        holder: "Ahmad Rizky Pratama",
    },
    {
        type: "bank",
        name: "Bank Mandiri",
        number: "0987654321",
        holder: "Siti Nurhaliza Putri",
    },
    {
        type: "ewallet",
        name: "GoPay",
        number: "081234567890",
        holder: "Ahmad Rizky Pratama",
    },
    {
        type: "ewallet",
        name: "DANA",
        number: "081234567890",
        holder: "Siti Nurhaliza Putri",
    },
];

export default function WeddingGiftTemplate2() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = async (text: string, index: number) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section className="section" id="gift">
            <div className="container">
                {/* Volume Label */}
                <div className="text-center mb-12">
                    <p className="label-text mb-4">Volume VI — Hadiah Pernikahan</p>

                    <h2
                        className="text-3xl md:text-5xl text-[#E8DFD4] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Wedding Gift
                    </h2>

                    <p className="text-[#9C8B7A] max-w-xl mx-auto">
                        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
                        Namun, jika Anda ingin memberikan hadiah, kami menyediakan opsi di
                        bawah ini.
                    </p>

                    <div className="ornate-divider w-48 mx-auto mt-6" />
                </div>

                {/* Gift Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {giftItems.map((item, index) => (
                        <div key={index} className="gift-card corner-flourish">
                            <div className="gift-card-header">
                                <div className="gift-card-icon">
                                    {item.type === "bank" ? (
                                        <CreditCard />
                                    ) : (
                                        <Smartphone />
                                    )}
                                </div>
                                <span className="gift-card-title">{item.name}</span>
                            </div>

                            <p className="gift-card-number">{item.number}</p>
                            <p className="gift-card-name">a.n. {item.holder}</p>

                            <button
                                onClick={() => handleCopy(item.number, index)}
                                className={`copy-btn ${copiedIndex === index ? "copied" : ""}`}
                            >
                                {copiedIndex === index ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Tersalin
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        Salin Nomor
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
