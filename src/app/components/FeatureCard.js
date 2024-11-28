import { Avatar } from "@mui/joy";

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 cursor-pointer  text-gray-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300 scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition">
      <Avatar variant="solid" className={feature.color} size="lg" />
      <h3 className="text-xl font-light mt-6">{feature.title}</h3>
      <p className="font-light text-sm text-gray-600 leading-tight mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas quis{" "}
      </p>
    </div>
  );
};

export default FeatureCard;
