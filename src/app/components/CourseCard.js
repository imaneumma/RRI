import Link from "next/link";
import Rating from "@mui/material/Rating";

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col shadow-md bg-white text-gray-700 items-center cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300">
      <div className="banner">
        <img src="/bg-images/write.jpg" alt="read right main page"></img>
      </div>
      <div className="details p-2">
        <h3 className="text-xl font-light text-left">{course.title}</h3>
        <p className="font-light text-sm text-gray-600">{course.description}</p>
      </div>
      <div className="footer text-right">
        <div className="">
          <p>Rs. 3700</p>
        </div>
        <Rating
          className="mr-2"
          name="read-only"
          value="4"
          readOnly
          size="small"
        />
        <span className="font-bold text-lg mr-2">4.6</span>
        <span className="text-xs ">(2500 ratings)</span>
      </div>
    </div>
  );
};

export default CourseCard;
