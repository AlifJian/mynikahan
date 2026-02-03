"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    { src: "/template2/gallery_1.png", alt: "Prewedding 1" },
    { src: "/template2/gallery_2.png", alt: "Prewedding 2" },
    { src: "/template2/gallery_3.png", alt: "Prewedding 3" },
    { src: "/template2/gallery_4.png", alt: "Prewedding 4" },
    { src: "/template2/cover_couple.png", alt: "Couple Portrait" },
    { src: "/template2/gallery_1.png", alt: "Prewedding 5" },
];

export default function GalleryTemplate2() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    };

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }, []);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case "Escape":
                    closeLightbox();
                    break;
                case "ArrowLeft":
                    goToPrevious();
                    break;
                case "ArrowRight":
                    goToNext();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, goToPrevious, goToNext]);

    return (
        <section className="section section-alt" id="gallery">
            <div className="container">
                {/* Volume Label */}
                <div className="text-center mb-12">
                    <p className="label-text mb-4">Volume V — Galeri</p>

                    <h2
                        className="text-3xl md:text-5xl text-[#E8DFD4] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Momen Bahagia Kami
                    </h2>

                    <p className="text-[#9C8B7A] max-w-xl mx-auto">
                        Kumpulan foto perjalanan cinta kami menuju hari yang dinantikan
                    </p>

                    <div className="ornate-divider w-48 mx-auto mt-6" />
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openLightbox(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    openLightbox(index);
                                }
                            }}
                            aria-label={`Buka ${image.alt}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {mounted && createPortal(
                <div
                    className={`lightbox-overlay ${lightboxOpen ? "active" : ""}`}
                    onClick={closeLightbox}
                >
                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="lightbox-close"
                            onClick={closeLightbox}
                            aria-label="Tutup"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Previous Button */}
                        <button
                            className="lightbox-nav prev"
                            onClick={goToPrevious}
                            aria-label="Foto sebelumnya"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <Image
                            src={galleryImages[currentIndex].src}
                            alt={galleryImages[currentIndex].alt}
                            width={1200}
                            height={1600}
                            className="lightbox-image"
                            priority
                        />

                        {/* Next Button */}
                        <button
                            className="lightbox-nav next"
                            onClick={goToNext}
                            aria-label="Foto berikutnya"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
