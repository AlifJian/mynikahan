"use client";

import { useState, useEffect } from "react";

interface CoverProps {
    onOpen: () => void;
}

export default function CoverTemplate2({ onOpen }: CoverProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Prevent scrolling when cover is showing
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleOpenInvitation = () => {
        setIsOpen(true);
        // Longer delay for smoother animation
        setTimeout(() => {
            onOpen();
        }, 1200);
    };

    return (
        <section className="cover-section fixed inset-0 z-50 bg-[#1C1714]">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/template2/cover_couple.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1C1714]/80 via-transparent to-[#1C1714]/90" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                {/* Envelope Animation Container */}
                <div className={`envelope ${isOpen ? "open" : ""}`}>
                    {/* Letter Content */}
                    <div className="letter ornate-frame rounded-lg">
                        <p className="label-text text-[10px] mb-4">Undangan Pernikahan</p>

                        <h1
                            className="text-4xl md:text-6xl mb-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Ahmad
                        </h1>
                        <p className="text-2xl md:text-3xl text-[#C9A962] my-2">&</p>
                        <h1
                            className="text-4xl md:text-6xl mb-6"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Siti
                        </h1>

                        <div className="ornate-divider w-48 mx-auto" />

                        <p className="text-[#9C8B7A] text-sm md:text-base mt-4 mb-2">
                            Kepada Yth.
                        </p>
                        <p className="text-lg md:text-xl text-[#E8DFD4]">
                            Bapak/Ibu/Saudara/i
                        </p>
                        <p className="text-xl md:text-2xl text-[#C9A962] mt-1 mb-6">
                            Tamu Undangan
                        </p>

                        {!isOpen && (
                            <button onClick={handleOpenInvitation} className="btn-primary mt-4">
                                Buka Undangan
                            </button>
                        )}

                        {isOpen && (
                            <p className="text-[#9C8B7A] text-sm mt-4 animate-pulse">
                                Membuka undangan...
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
