import MainBuildingTally from "@/components/MainBuildingTally";

export default function Home() {
  return (
    <header className="h-[100svh] bg-black flex flex-col gap-4 items-center justify-center overflow-hidden p-4">
      <p className="text-white text-center flex flex-col items-center justify-center mb-8">
        <span className="text-[1.8rem]">UNIVERSITY OF HELSINKI</span>
        <span className="text-5xl">MAIN BUILDING</span>
      </p>

      <MainBuildingTally />

      <p className="text-white flex flex-col items-center justify-center mt-6">
        <span className="text-5xl">DAYS</span>
        <span className="text-2xl">WITHOUT AN ANSWER</span>
      </p>

      <a
        className="mt-12 text-4xl text-white text-center underline hover:text-black hover:bg-white"
        href="https://opiskelijatleikkauksiavastaan.blogspot.com"
      >
        OPISKELIJAT LEIKKAUKSIA VASTAAN
      </a>
    </header>
  );
}
