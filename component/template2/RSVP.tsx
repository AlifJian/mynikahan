"use client";

import { useState, useEffect } from "react";
import { Send, User, MessageCircle, CheckCircle } from "lucide-react";

interface RSVPEntry {
    id: number;
    nama: string;
    kehadiran: "hadir" | "tidak_hadir" | "ragu";
    ucapan: string;
    created_at: string;
}

interface RSVPResponse {
    data: RSVPEntry[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export default function RSVPTemplate2() {
    const [entries, setEntries] = useState<RSVPEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [formData, setFormData] = useState({
        nama: "",
        kehadiran: "hadir" as "hadir" | "tidak_hadir" | "ragu",
        ucapan: "",
    });

    // Fetch RSVP entries
    const fetchEntries = async (pageNum: number = 1) => {
        try {
            const res = await fetch(`/api/template2/rsvp?page=${pageNum}&limit=10`);
            const data: RSVPResponse = await res.json();
            setEntries(data.data);
            setTotalPages(data.pagination.totalPages);
            setPage(data.pagination.page);
        } catch (error) {
            console.error("Error fetching RSVP entries:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nama.trim() || !formData.ucapan.trim()) return;

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/template2/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({ nama: "", kehadiran: "hadir", ucapan: "" });
                fetchEntries(1);
                setTimeout(() => setSubmitted(false), 3000);
            }
        } catch (error) {
            console.error("Error submitting RSVP:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "hadir":
                return "Hadir";
            case "tidak_hadir":
                return "Tidak Hadir";
            case "ragu":
                return "Masih Ragu";
            default:
                return status;
        }
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case "hadir":
                return "hadir";
            case "tidak_hadir":
                return "tidak-hadir";
            case "ragu":
                return "ragu";
            default:
                return "";
        }
    };

    return (
        <section className="section section-alt" id="rsvp">
            <div className="container">
                {/* Volume Label */}
                <div className="text-center mb-12">
                    <p className="label-text mb-4">Volume VII — Buku Tamu</p>

                    <h2
                        className="text-3xl md:text-5xl text-[#E8DFD4] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        RSVP & Ucapan
                    </h2>

                    <p className="text-[#9C8B7A] max-w-xl mx-auto">
                        Konfirmasi kehadiran dan berikan doa serta ucapan untuk kedua mempelai
                    </p>

                    <div className="ornate-divider w-48 mx-auto mt-6" />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* RSVP Form */}
                    <div className="card corner-flourish">
                        <h3
                            className="text-xl text-[#E8DFD4] mb-6"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Kirim Ucapan
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="form-label">
                                    <User className="w-3 h-3 inline mr-2" />
                                    Nama Tamu
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Masukkan nama Anda"
                                    value={formData.nama}
                                    onChange={(e) =>
                                        setFormData({ ...formData, nama: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div>
                                <label className="form-label mb-3">Konfirmasi Kehadiran</label>
                                <div className="radio-group">
                                    <label className="radio-option">
                                        <input
                                            type="radio"
                                            name="kehadiran"
                                            value="hadir"
                                            checked={formData.kehadiran === "hadir"}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    kehadiran: e.target.value as "hadir",
                                                })
                                            }
                                        />
                                        <span>Hadir</span>
                                    </label>
                                    <label className="radio-option">
                                        <input
                                            type="radio"
                                            name="kehadiran"
                                            value="tidak_hadir"
                                            checked={formData.kehadiran === "tidak_hadir"}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    kehadiran: e.target.value as "tidak_hadir",
                                                })
                                            }
                                        />
                                        <span>Tidak Hadir</span>
                                    </label>
                                    <label className="radio-option">
                                        <input
                                            type="radio"
                                            name="kehadiran"
                                            value="ragu"
                                            checked={formData.kehadiran === "ragu"}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    kehadiran: e.target.value as "ragu",
                                                })
                                            }
                                        />
                                        <span>Masih Ragu</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="form-label">
                                    <MessageCircle className="w-3 h-3 inline mr-2" />
                                    Ucapan & Doa
                                </label>
                                <textarea
                                    className="form-textarea"
                                    placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                                    value={formData.ucapan}
                                    onChange={(e) =>
                                        setFormData({ ...formData, ucapan: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full flex items-center justify-center gap-2"
                                disabled={isSubmitting}
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        Terkirim!
                                    </>
                                ) : isSubmitting ? (
                                    "Mengirim..."
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Kirim Ucapan
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* RSVP List */}
                    <div className="card corner-flourish">
                        <h3
                            className="text-xl text-[#E8DFD4] mb-6"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Ucapan dari Tamu
                        </h3>

                        {isLoading ? (
                            <p className="text-[#9C8B7A] text-center py-8">Memuat ucapan...</p>
                        ) : entries.length === 0 ? (
                            <p className="text-[#9C8B7A] text-center py-8">
                                Belum ada ucapan. Jadilah yang pertama!
                            </p>
                        ) : (
                            <>
                                <div className="rsvp-list">
                                    {entries.map((entry) => (
                                        <div key={entry.id} className="rsvp-item">
                                            <div className="rsvp-item-header">
                                                <span className="rsvp-item-name">{entry.nama}</span>
                                                <span
                                                    className={`rsvp-item-status ${getStatusClass(
                                                        entry.kehadiran
                                                    )}`}
                                                >
                                                    {getStatusLabel(entry.kehadiran)}
                                                </span>
                                            </div>
                                            <p className="rsvp-item-message">&ldquo;{entry.ucapan}&rdquo;</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center gap-2 mt-6">
                                        <button
                                            onClick={() => fetchEntries(page - 1)}
                                            disabled={page <= 1}
                                            className="btn-ghost disabled:opacity-50"
                                        >
                                            Prev
                                        </button>
                                        <span className="text-[#9C8B7A] text-sm py-2">
                                            {page} / {totalPages}
                                        </span>
                                        <button
                                            onClick={() => fetchEntries(page + 1)}
                                            disabled={page >= totalPages}
                                            className="btn-ghost disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
