"use client";

import { useState, useEffect } from "react";
import "@/styles/template2/template2.css";

import CoverTemplate2 from "@/component/template2/Cover";
import HeroTemplate2 from "@/component/template2/Hero";
import GroomTemplate2 from "@/component/template2/Groom";
import BrideTemplate2 from "@/component/template2/Bride";
import EventDetailsTemplate2 from "@/component/template2/EventDetails";
import GalleryTemplate2 from "@/component/template2/Gallery";
import WeddingGiftTemplate2 from "@/component/template2/WeddingGift";
import RSVPTemplate2 from "@/component/template2/RSVP";
import ThankYouTemplate2 from "@/component/template2/ThankYou";
import FooterTemplate2 from "@/component/template2/Footer";

export default function Template2Page() {
    const [showCover, setShowCover] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);
    const [coverFading, setCoverFading] = useState(false);

    const handleCoverOpen = () => {
        // Start fading cover
        setCoverFading(true);

        // After cover fades, show content with animation
        setTimeout(() => {
            setShowCover(false);
            // Small delay before showing content for smooth transition
            setTimeout(() => {
                setContentVisible(true);
            }, 100);
        }, 800);
    };

    // Reset scroll position when content appears
    useEffect(() => {
        if (!showCover) {
            window.scrollTo(0, 0);
        }
    }, [showCover]);

    return (
        <div className="template2">
            {/* Cover Section with fade animation */}
            {showCover && (
                <div className={`cover-wrapper ${coverFading ? "fading" : ""}`}>
                    <CoverTemplate2 onOpen={handleCoverOpen} />
                </div>
            )}

            {/* Main Content with fade-in animation */}
            {!showCover && (
                <main className={`main-content ${contentVisible ? "visible" : ""}`}>
                    <HeroTemplate2 />
                    <GroomTemplate2 />
                    <BrideTemplate2 />
                    <EventDetailsTemplate2 />
                    <GalleryTemplate2 />
                    <WeddingGiftTemplate2 />
                    <RSVPTemplate2 />
                    <ThankYouTemplate2 />
                    <FooterTemplate2 />
                </main>
            )}
        </div>
    );
}
