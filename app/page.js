"use client"
import Overons from "@/components/Overons";
import Image from "next/image";
import General from "@/components/General";
import wandelaars3 from "../public/images/wandelaars3.png";
import Totop from "@/components/Totop";

export default function Home() {
  return (
    <>
      <section className="hero w-full h-[600px] flex flex-row items-start justify-between relative">
        <div className="w-full flex flex-col pt-32 px-20">
          <span className="font-bold text-4xl blue_gradient tracking-[3px] pt-8">
            LEERHUIS AMSTERDAM
          </span>
          <span className="header_subtext font-bold text-2xl mt-2 tracking-[9px] blue_gradient pb-6">
            voor zinvol samenleven
          </span>
          <div>
            <Image
              src={wandelaars3}
              width={800}
              height={800}
              alt="wandelaars"
              className="mt-8"
            />
          </div>
        </div>

        {/* <div className="w-1/2 h-full absolute bg-gradient-to-l from-white to-transparent right-0"></div> */}

        <div
          className="textbox w-[500px] flex flex-col items-center max-md:flex-col absolute right-20 top-[165px] rounded-lg
        bg-gradient-to-b from-[#bfcfcb] to-[#829690] pt-8 pb-6 shadow-md max-herotext:hidden"
        >
          <span className="w-80 text-xl text-green-950 flex justify-center font-semibold border-b border-green-950 pb-2 mb-2">
            Over het Leerhuis
          </span>
          <div className="w-full flex flex-row justify-center max-md:flex-col">
            <div className="w-full px-8 pb-16 pt-4 text-green-950 flex flex-col leading-2 text-md">
              Leerhuis Amsterdam richt zich op zinvol samen leven in een
              complexe wereld die ons voor veel vragen stelt.
              <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
              hedendaagse wereld van kunst en cultuur zoeken wij hierover het
              gesprek.
              <br /> We organiseren daarom bijeenkomsten, dialogen en cursussen,
              in de Muiderkerk, waarin deze werelden elkaar ontmoeten.
            </div>
          </div>

          {/* <Image src={wandelaars2} width={280} height={100} alt="" /> */}
        </div>
      </section>

      <General />

      <div
        id="agenda"
        className="w-full h-[700px] bg-[#a9bab6] text-4xl flex items-center justify-center text-green-950"
      >
        Agenda
      </div>

      <Overons />

      <div className="w-full h-[700px] bg-[url('../public/images/muiderkerk3.jpg')] bg-center"></div>

      <div
        id="activiteiten"
        className="w-full h-[700px] bg-white text-green-950/40 text-4xl flex items-center justify-center"
      >
        Activiteiten
      </div>
      <div
        id="contact"
        className="w-full h-[700px] bg-[#a9bab6] text-green-950 text-4xl flex items-center justify-center"
      >
        contact
      </div>
      <div className="w-full h-[700px] bg-black text-white text-4xl flex items-center justify-center bg-[url('../public/images/overonsbg.png')]">
        Footer
      </div>

      <Totop />
    </>
  );
}
