import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default async function PengantinTemplate1() {
  return (
    <section className="flex justify-center p-4 items-center mb-7 mt-7">
      <div className="flex justify-around items-center">
        <div>
            <p className="font-bold text-center">Owo Chan</p>
            <p className="text-xs text-gray-500 text-center">THE BRIDE</p>
            <div className="grid grid-cols-3 items-center gap-2">
                <Twitter className="size-4 text-blue-300"/>
                <Facebook className="size-4 text-blue-700"/>
                <Instagram className="size-4 text-red-400"/>
            </div>
        </div>
        <div className="aspect-square relative">
            <Image
          src={"/Template1_MempelaiWanita.png"}
          alt={"Mempelai Wanita"}
          width={300}
          height={300}
          className=""
        />
        <Image
          src={"/Template1_frame.png"}
          alt={"Bingkai"}
          width={300}
          height={300}
          className="overlay"
        />
        </div>
      </div>
      <span className="text-9xl flex items-center">&</span>
      <div className="flex justify-around items-center">
        <div className="aspect-square relative">
          <Image
            src={"/Template1_MempelaiPria.png"}
            alt={"Mempelai Wanita"}
            width={300}
            height={300}
            className=""
          />
          <Image
            src={"/Template1_frame.png"}
            alt={"Bingkai"}
            width={300}
            height={300}
            className="overlay"
          />
        </div>
        <div>
            <p className="font-bold text-center">Sawit San</p>
            <p className="text-xs text-gray-500 text-center">THE GROOM</p>
            <div className="grid grid-cols-3 items-center gap-2">
                <Twitter className="size-4 text-blue-300"/>
                <Facebook className="size-4 text-blue-700"/>
                <Instagram className="size-4 text-red-400"/>
            </div>
        </div>
      </div>
    </section>
  );
}
