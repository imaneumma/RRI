import Link from "next/link";

const FeatureCard = ({ feature }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white text-gray-700">
      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas quis{" "}
      </p>
    </div>
  );
};

export default FeatureCard;
