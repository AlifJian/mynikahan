import { Rose } from "lucide-react";
import Image from "next/image";

export default async function JumbotronTemplate1() {
  return (
      <section className="p-4 grid grid-cols-30-70 h-lvh">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <Rose className="text-red-500 size-12" />
            <h1 className="text-[33px] text-gray-500 font-sans">
              Wedding Invitation
            </h1>
            <h1 className="text-[63px] mt-9 font-bold font-serif">
              <span>Doni</span>
              <br />
              <span>& Septi</span>
            </h1>
            <h1 className="mt-12 font-sans">
              Dear Sir/Madam <br />
              Guest
            </h1>
            <button className="mt-18 border text-gray-800 border-gray-600 p-3 font-sans hover:cursor-pointer hover:bg-black hover:text-white rounded-md">
              Open Invitation
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-125 w-175 overflow-hidden mt-9 bg-[url('/template1/bg1.jpg')] bg-no-repeat bg-center bg-cover rounded-tl-[100px] rounded-xl shadow-2xl">
            <Image
              src={"/template1/wedding.png"}
              alt={"Mempelai"}
              width={700}
              height={500}
              className="object-cover object-[50%_-120px] "
            />
          </div>
        </div>
      </section>
  );
}
