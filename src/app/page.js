import Image from "next/image";
import CourseCard from "@/components//CourseCard";

export default function Home() {
  return (
    //<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-gray-700 text-4xl text-center">
          Vission Board
        </h1>

        <div>
          <h1 className="font-bold text-gray-700 text-xl">Logos</h1>
          <div className="grid grid-cols-4 grid-flow-col gap-4">
            <Image
              className="dark:invert bg-black"
              src="/rri-mini-logo.png"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />

            <Image
              className="dark:invert bg-black"
              src="/rri-logo.png"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />

            <Image
              className="dark:invert bg-black"
              src="/rri-logo-left.png"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />

            <Image
              className="dark:invert bg-black"
              src="/rri-logo-2.png"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-gray-700 text-xl">Cards</h1>
          <CourseCard
            key={2}
            course={{
              title: "Maths",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas quis",
              id: 2,
            }}
          />

          <div className="grid grid-cols-4 grid-flow-col gap-4"></div>
        </div>
      </main>
    </div>
  );
}
