import Rating from "@mui/material/Rating";

const RatingCard = ({ rating }) => {
  return (
    <>
      <Rating
        className="mr-2"
        name="read-only"
        value={rating.value}
        readOnly
        size="small"
      />
      <span className="font-bold text-lg mr-2">{rating.value}</span>
      <span className="text-xs ">({rating.count} ratings)</span>
    </>
  );
};

export default RatingCard;
