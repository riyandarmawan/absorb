import { GridBackground } from "./ui/grid-background"

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-screen">
      <GridBackground />
      <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="text-tiny bg-blue-50 p-2 rounded-full font-bold uppercase border border-blue-100 text-blue-500 tracking-widest">
          The Science Of Language Acquisition
        </div>

        <div className="font-jakarta font-extrabold text-zinc-900 text-2xl text-center tracking-tight">
          Language is acquired,
          <span className="block">not learned.</span>
        </div>
      </div>
    </section>
  );
}
