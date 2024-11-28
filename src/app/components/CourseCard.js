import RatingCard from "@/components/RatingCard";
import Image from "next/image";

const CourseCard = ({ course }) => {
  const rating = {
    value: 4.2,
    count: 2500,
  };

  return (
    <div className="flex flex-col shadow-md bg-white text-gray-700 items-center cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300 scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition">
      <div className="banner">
        <Image
          src="/bg-images/books-sm.jpg"
          alt="read right main page"
          height="50"
          width="250"
        ></Image>
      </div>
      <div className="details p-2">
        <h3 className="text-xl font-light text-left">{course.title}</h3>
        <p className="font-light text-sm text-gray-600">{course.description}</p>
      </div>
      <div className="footer text-right">
        <div className="">
          <p>Rs. 3700</p>
        </div>
        <RatingCard rating={rating} />
      </div>
    </div>
  );
};

export default CourseCard;
