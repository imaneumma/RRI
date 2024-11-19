import { Avatar } from "@mui/joy";
import RatingCard from "@/components/RatingCard";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="flex flex-col my-4 p-4 border bottom-2 bg-white text-gray-700">
      <div className="grid grid-flow-col gap-2 ">
        <div className="flex items-center text-center mx-auto container">
          <Avatar variant="solid" size="lg" />
        </div>

        <div className="leading-tight ">
          <h3 className="text-xl font-light mt-2">{instructor.name}</h3>
          <p>
            <span className="font-lg">Experience: </span>
            <span className="font-bold">{instructor.experience}</span>
          </p>
          <RatingCard rating={instructor.rating} />
        </div>
      </div>
      <div className="mt-2 leading-tight ">
        <h4 className="font-bold">More about the instructor</h4>
        <p className="font-light text-sm text-gray-600 mt-2">
          {instructor.detail}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
