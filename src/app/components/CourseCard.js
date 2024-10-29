import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white text-gray-700">
      <h3 className="text-xl font-bold">{course.title}</h3>
      <p className="mt-2">{course.description}</p>
      <Link
        href={`/courses/${course.id}`}
        className="text-blue-500 mt-4 inline-block"
      >
        View Course
      </Link>
    </div>
  );
};

export default CourseCard;
