import { getImage } from "../../utilities/functions";
import GetIcon from "../../utilities/Icon";
import Swal from "sweetalert2";
const Personal = ({ personal }) => {
  console.log(personal);
  const { photo, gender, name } = personal;
  const handleName = async () => {
    Swal.fire({
      title: "Enter your Name",
      input: "text",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    }).then((value) => {
      if (value.isConfirmed) {
        console.log(value.value);
      }
    });
  };
  return (
    <div>
      <div
        className="rounded-lg
      "
      >
        <img
          className=" aspect-square lg:size-80 p-5 rounded-2xl"
          src={
            photo
              ? photo
              : gender === "M"
              ? getImage("photo", "studentM.jpeg")
              : getImage("photo", "studentF.jpeg")
          }
          alt=""
        />
      </div>
      <div>
        <div className="flex gap-5">
          <h1
            className="lg:text-2xl
        "
          >
            Name: {name.fullName}
          </h1>
          <button onClick={handleName}>
            <GetIcon icon={"FaRegEdit"} lib={"fa"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
