"use client";

import { CalendarHeart } from "lucide-react";
import { useState, useEffect } from "react";

// Target wedding date - change this to your actual wedding date
const WEDDING_DATE = new Date("2026-03-20T10:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = WEDDING_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function DateDay() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-center p-4">
      <div className="flex flex-col">
        <div className="flex justify-center mt-2">
          <CalendarHeart className="text-gray-400" size={"4.5rem"} />
        </div>
        <h1 className="font-extrabold text-4xl font-sans">Wedding Day</h1>
        <div className="grid-cols-4 grid place-items-center mt-6 gap-y-6">
            <div className="size-12 bg-zinc-100 text-[12px] text-center text-gray-700 p-2 rounded-l">
                <p className="font-bold">{timeLeft.days}</p>
                <p className="text-[9px]">Days</p>
            </div>
            <div className="size-12 bg-zinc-100 text-[12px] text-center text-gray-700 p-2">
                <p className="font-bold">{timeLeft.hours}</p>
                <p className="text-[9px]">Hours</p>
            </div>
            <div className="size-12 bg-zinc-100 text-[12px] text-center text-gray-700 p-2">
                <p className="font-bold">{timeLeft.minutes}</p>
                <p className="text-[9px]">Minutes</p>
            </div>
            <div className="size-12 bg-zinc-100 text-[12px] text-center text-gray-700 p-2 rounded-r">
                <p className="font-bold">{timeLeft.seconds}</p>
                <p className="text-[9px]">Seconds</p>
            </div>
        </div>
      </div>
    </section>
  );
}
