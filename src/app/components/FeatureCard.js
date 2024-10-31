import { Avatar } from "@mui/joy";

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center p-4  text-gray-700">
      <Avatar variant="solid" className={feature.color} size="lg" />
      <h3 className="text-xl font-light mt-6">{feature.title}</h3>
      <p className="font-light text-sm text-gray-600 leading-tight mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas quis{" "}
      </p>
    </div>
  );
};

export default FeatureCard;
