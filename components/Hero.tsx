import { GridBackground } from "./ui/grid-background"
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-screen px-4">
      <GridBackground />
      <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="m-4 text-tiny bg-blue-50 p-2 text-center rounded-full font-bold uppercase border border-blue-100 text-blue-600 tracking-widest">
          The Science Of Language Acquisition
        </div>

        <div className="font-jakarta font-extrabold text-zinc-900 text-2xl text-center tracking-tight">
          Language is acquired,
          <span className="block">not learned.</span>
        </div>

        <p className="text-center mt-6 mb-8 text-lg leading-relaxed text-zinc-600">
          Track your immersion hours and reach fluency through the power of Comprehensible Input.
        </p>

        {/* <button className="bg-blue-600 py-2 px-4 text-blue-100 rounded-full font-semibold mt-8">Start Absorbing</button> */}
        <HoverBorderGradient
          as="button"
          className="font-semibold cursor-pointer bg-white text-black"
          containerClassName="rounded-full"
        >
          Start Absorbing
        </HoverBorderGradient>


        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Aceternity UI</span>
        </HoverBorderGradient>
      </div>
    </section>
  );
}
