import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-center gap-5 px-3 pb-28 pt-28 md:flex-row md:pb-[180px] lg:gap-6 lg:px-0 lg:pt-[140px]">
      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          Services
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
          Experienced in multiple medical practices
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra turpis habitant eu sociis fermentum felis.
        </p>
        <Button title="Book an appointment" Icon={FaWhatsapp} />
      </div>

      <div className="max-h-[660px] max-w-[622px]">
        <img
          className="custom-animate size-[85%] object-contain md:size-full"
          src="/service.png"
          alt="About"
        />
      </div>
    </div>
  );
}
