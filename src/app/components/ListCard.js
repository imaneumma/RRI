import DoneIcon from "@mui/icons-material/Done";

const ListCard = ({ list }) => {
  return (
    <div className="flex flex-col my-6 p-6 border bottom-2 bg-white text-gray-700">
      <h1 className="text-2xl mb-2">What you&apos;ll learn </h1>
      <div className="grid grid-cols-2 row-span-3 gap-4 leading-tight font-light text-sm">
        {list ? (
          list.map((item, index) => (
            <div className="flex" key={index}>
              <div className="flex-none">
                <DoneIcon className="mr-4" fontSize="small" />
              </div>
              <div className="flex-grow text-sm">
                <span>{item}</span>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ListCard;
