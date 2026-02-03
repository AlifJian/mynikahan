import { NextRequest, NextResponse } from "next/server";
import { getAllRSVP, createRSVP } from "@/lib/template2/template2-db";

// GET /api/template2/rsvp - Fetch all RSVP entries with pagination
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);

        // Validate pagination params
        const validPage = Math.max(1, page);
        const validLimit = Math.min(50, Math.max(1, limit));

        const { data, total } = getAllRSVP(validPage, validLimit);

        return NextResponse.json({
            data,
            pagination: {
                page: validPage,
                limit: validLimit,
                total,
                totalPages: Math.ceil(total / validLimit),
            },
        });
    } catch (error) {
        console.error("Error fetching RSVP entries:", error);
        return NextResponse.json(
            { error: "Failed to fetch RSVP entries" },
            { status: 500 }
        );
    }
}

// POST /api/template2/rsvp - Create new RSVP entry
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nama, kehadiran, ucapan } = body;

        // Validate required fields
        if (!nama || !kehadiran || !ucapan) {
            return NextResponse.json(
                { error: "Missing required fields: nama, kehadiran, ucapan" },
                { status: 400 }
            );
        }

        // Validate kehadiran value
        const validKehadiran = ["hadir", "tidak_hadir", "ragu"];
        if (!validKehadiran.includes(kehadiran)) {
            return NextResponse.json(
                { error: "Invalid kehadiran value. Must be: hadir, tidak_hadir, or ragu" },
                { status: 400 }
            );
        }

        // Sanitize input
        const sanitizedNama = String(nama).trim().slice(0, 100);
        const sanitizedUcapan = String(ucapan).trim().slice(0, 500);

        const entry = createRSVP(sanitizedNama, kehadiran, sanitizedUcapan);

        return NextResponse.json(entry, { status: 201 });
    } catch (error) {
        console.error("Error creating RSVP entry:", error);
        return NextResponse.json(
            { error: "Failed to create RSVP entry" },
            { status: 500 }
        );
    }
}
