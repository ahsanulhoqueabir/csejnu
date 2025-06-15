import { getImage } from "../../utilities/functions";

const Card = ({ data }) => {
  const { personal, position, addressInfo, department } = data;

  return (
    <div className="w-full bg-accent-content p-4 rounded-lg border">
      <div className="">
        <img
          className="h-44 rounded-md object-cover"
          src={
            personal.photo
              ? personal.photo
              : personal.gender === "M"
              ? getImage("photo", "faculty.jpeg")
              : getImage("photo", "facultyfff.jpeg")
          }
          // alt={personal.name.fullName}
        />
        <h1 className="text-2xl font-bold font-philosopher pt-3">
          {personal.name.fullName}
        </h1>
        <h1>{position}</h1>
        <h1>
          {department?.name || ""} - ({department?.accronym || ""})
        </h1>
        <h1>{personal.email}</h1>
        <h1>{personal.phone}</h1>
      </div>
    </div>
  );
};

export default Card;
