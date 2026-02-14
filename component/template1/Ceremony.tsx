import { CalendarDays, MapPin } from "lucide-react";

export default async function Ceremony() {
  return (
    <section className="p-4 mt-9">
      <div className="flex flex-col w-full">
        <h1 className="font-sans font-extrabold text-4xl text-center">
          Ceremony
        </h1>
        <div className="grid grid-cols-3 w-1/3 justify-items-stretch self-center gap-x-6 my-6">
          <div className="text-center">
            <p className="text-sm font-light">Date</p>
            <p className="text-md font-bold font-serif">20 Feb 2026</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-light">Location</p>
            <p className="text-md font-bold font-serif">Aula Utama</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-light">Time</p>
            <p className="text-md font-bold font-serif">08.00 - Selesai</p>
          </div>
        </div>
        <h1 className="text-center font-sans text-sm">
          Jalan Abi Umi No 342
        </h1>
        <div className="grid grid-cols-2 self-center gap-x-6 w-1/3">
          <button className="mt-3 border text-gray-800 border-gray-600 p-3 font-sans hover:cursor-pointer hover:bg-black hover:text-white rounded-md flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            Lihat lokasi
          </button>
          <button className="mt-3 border text-gray-800 border-gray-600 p-3 font-sans hover:cursor-pointer hover:bg-black hover:text-white rounded-md flex items-center justify-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Tambahkan ke kalender
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <hr className="mt-4 w-2/3 self-center border-b-2" />
        </div> 
        <h1 className="font-sans font-extrabold text-4xl text-center mt-9">
          Resepsi
        </h1>
        <div className="grid grid-cols-3 w-1/3 justify-items-stretch self-center gap-x-6 my-6">
          <div className="text-center">
            <p className="text-sm font-light">Date</p>
            <p className="text-md font-bold font-serif">20 Feb 2026</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-light">Location</p>
            <p className="text-md font-bold font-serif">Rumah Mempelai Wanita</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-light">Time</p>
            <p className="text-md font-bold font-serif">19.00 - Selesai</p>
          </div>
        </div>
        <h1 className="text-center font-sans text-sm">
          Jalan Lingkar Kotak No 512
        </h1>
        <div className="grid grid-cols-2 self-center gap-x-6 w-1/3">
          <button className="mt-3 border text-gray-800 border-gray-600 p-3 font-sans hover:cursor-pointer hover:bg-black hover:text-white rounded-md flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            Lihat lokasi
          </button>
          <button className="mt-3 border text-gray-800 border-gray-600 p-3 font-sans hover:cursor-pointer hover:bg-black hover:text-white rounded-md flex items-center justify-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Tambahkan ke kalender
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <hr className="mt-4 w-2/3 self-center border-b-2" />
        </div>
      </div>
    </section>
  );
}
