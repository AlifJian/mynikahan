import { Heart } from "lucide-react";

export default function FooterTemplate2() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="ornate-divider w-32 mx-auto mb-8" />

                <p className="footer-brand">nikahan.my.id</p>

                <p className="footer-tagline flex items-center justify-center gap-2">
                    Dibuat oleh MyNikahan
                </p>

                <p className="text-xs text-[#4A3F35] mt-4">
                    © 2026 MyNikahan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
