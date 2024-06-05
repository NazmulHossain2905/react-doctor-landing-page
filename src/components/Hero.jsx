import { Button } from "./ui";

export default function Hero() {
  return (
    <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[80px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px]">
      <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          Dr. Matthew Anderson
        </h5>
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
          A dedicated doctor <br />
          you can trust
        </h1>
        <p className="max-w-[452px] text-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          eget vel, nunc nulla feugiat. Metus ut.
        </p>
        <Button title="Book an appointment" />
      </div>

      <div className="max-h-[506px] max-w-[678px]">
        <img
          className="custom-animate size-full object-contain"
          src="/hero.png"
          alt="Hero"
        />
      </div>
    </div>
  );
}
