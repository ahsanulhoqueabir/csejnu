import { useNavigate } from "react-router-dom";
import { dateDifference, getImage } from "../../../utility/functions";

const Class = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/academic/tutorial-details/${item._id}`);
      }}
      className="w-full"
    >
      <div className="border-2  border-teal-600 rounded-lg">
        <iframe
          className="h-[240px] md:h-[220px] lg:h-[250px] w-full rounded"
          src={`https://www.youtube.com/embed/${item.classURL}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pt-5 flex gap-3">
        <div>
          <img
            className="rounded-full size-12 bg-info-content"
            src={getImage("others", "teacher.png")}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">{item.topic}</h1>
          <p className="text-sm text-gray-500 ">{dateDifference(item.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
