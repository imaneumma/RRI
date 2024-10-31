import Image from "next/image";
import Login from "@/components/Login";
import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const features = [
    { id: 1, title: "Advanced Topics", color: "bg-green-500" },
    { id: 2, title: "Expert Teachers", color: "bg-orange-500" },
    { id: 3, title: "Video Courses", color: "bg-cyan-500" },
    { id: 4, title: "Notes & Materials", color: "bg-red-500" },
  ];

  return (
    //<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="p-8  ">
      <div className="grid grid-cols-2  gap-4 my-12 min-h-[496px]">
        <h1 className="text-6xl tracking-wide font-light font-sans uppercase  mt-32">
          Craft your future today.
        </h1>

        <Login />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl tracking-wide font-light font-sans capitalize  my-8">
          Learn from the best in business with
        </h1>
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start my-12">
          <div className="grid grid-cols-4 grid-flow-col gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
