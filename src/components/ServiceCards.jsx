import React from "react";
import { ServiceCard } from "./ui";

export default function ServiceCards() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-9 pb-[80px] md:pb-[164px]">
      <ServiceCard title="General" />
      <ServiceCard title="Pediatrics" imgSrc="/card-img-2.png" />
      <ServiceCard title="Nutritional" imgSrc="/card-img-3.png" />
      <ServiceCard title="Cardiology" imgSrc="/card-img-4.png" />
      <ServiceCard title="Ophthalmology" imgSrc="/card-img-5.png" />
      <ServiceCard title="Orthopedics" imgSrc="/card-img-6.png" />
    </div>
  );
}
