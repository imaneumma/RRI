// import { useEffect, useState } from "react";
"use client";
import CourseCard from "@/components/CourseCard";
import { useRouter } from "next/navigation";

export default function Home() {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("/api/courses")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  const router = useRouter();

  function openDetails(id) {
    router.replace("/courses/" + id);
  }

  const courses = [
    {
      title: "Current Affairs",
      id: 1,
      description: "This is the course description and enjoy!",
    },
    {
      title: "Politics",
      id: 2,
      description: "This is the course description and enjoy!",
    },
    {
      title: "English essay",
      id: 3,
      description: "This is the course description and enjoy!",
    },
    {
      title: "Islamic studies",
      id: 4,
      description: "This is the course description and enjoy!",
    },
    {
      title: "General science and ability",
      id: 5,
      description: "This is the course description and enjoy!",
    },
    {
      title: "Accounting",
      id: 6,
      description: "This is the course description and enjoy!",
    },
    {
      title: "Auditing",
      id: 7,
      description: "This is the course description and enjoy!",
    },
    {
      title: "Constitutional Law",
      id: 8,
      description: "This is the course description and enjoy!",
    },
  ];
  return (
    <div className="px-8 py-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-8">Recommended Courses for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {courses.map((course) => (
            <div onClick={() => openDetails(course.id)}>
              <CourseCard key={course.id} course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
