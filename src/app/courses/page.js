// import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

export default function Home() {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("/api/courses")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  const courses = [
    {
      title: "english",
      id: 1,
      description: "This is the course description and enjoy!",
    },
    {
      title: "maths",
      id: 2,
      description: "This is the course description and enjoy!",
    },
  ];
  return (
    <div className="px-8 py-12 bg-cyan-500 text-white">
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
