import { useEffect, useState } from "react";
import useUserdata from "../../../../../hooks/fetch/useUserdata";
import LoaderComponent from "../../../../Shared/LoaderComponent";
import SMCP from "../../../../../utility/iconname";
import { FaRegSave } from "react-icons/fa";
import useAxiosSecure from "../../../../../hooks/axios/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import { toast } from "react-toastify";
import Headline from "../../../../../components/Headline";
import AddNew from "./AddNew";
const Social = () => {
  const [isNewAc, setNewAc] = useState(false);
  const [SMac, setSMac] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const platforms = SMCP;
  const { loading, data, error } = useUserdata();
  const [contents, setContents] = useState([]);
  useEffect(() => {
    if (!loading) {
      setContents(data.social);
      // setSMac(data.social);
      setSMac([...data.social, ...data.codingProfile]);
    }
  }, [loading]);

  if (loading) {
    return <LoaderComponent />;
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const pl = form[0].name;
    const value = form[pl].value;
    const index = data.social.findIndex((item) => {
      return item.platform === pl;
    });
    const newData = [...data.social];
    newData[index] = { ...newData[index], username: value };
    axiosSecure
      .put(`/students/updateStudent?email=${user?.email}`, {
        social: newData,
      })
      .then((res) => {
        toast(
          <p>
            <span className="capitalize">{pl}</span> username updated
            successfully
          </p>
        );
      })
      .catch((err) => {
        toast.error("Failed to update Info");
      });
  };
  const handleCodingProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const pl = form[0].name;
    const value = form[pl].value;
    const index = data.codingProfile.findIndex((item) => {
      return item.platform === pl;
    });
    const newData = [...data.codingProfile];
    newData[index] = { ...newData[index], handle: value };
    axiosSecure
      .put(`/students/updateStudent?email=${user?.email}`, {
        codingProfile: newData,
      })
      .then((res) => {
        toast(
          <p>
            <span className="capitalize">{pl}</span> username updated
            successfully
          </p>
        );
      })
      .catch((err) => {
        toast.error("Failed to update Info");
      });
  };
  return (
    <div>
      <Headline>Social Media Accounts</Headline>
      <section className="lg:flex lg:px-24 justify-center gap-20 items-start">
        <div className="">
          <div className="space-y-2 py-5">
            {data.social.map((item, index) => (
              <form
                onSubmit={handleUpdate}
                key={item._id}
                className=" flex gap-4"
              >
                <h3 className="capitalize pl-1 bg-accent-content w-36 rounded">
                  {item.platform}
                </h3>
                <input
                  name={item.platform}
                  className="inputSocial"
                  type="text"
                  defaultValue={item.username}
                />
                <button>
                  <FaRegSave />
                </button>
              </form>
            ))}
          </div>
          <div className="space-y-2 ">
            {data.codingProfile.map((item, index) => (
              <form
                onSubmit={handleCodingProfile}
                key={item._id}
                className=" flex gap-4"
              >
                <h3 className="capitalize pl-1 bg-accent-content w-36 rounded">
                  {item.platform}
                </h3>
                <input
                  name={item.platform}
                  className="inputSocial"
                  type="text"
                  defaultValue={item.handle}
                />
                <button>
                  <FaRegSave />
                </button>
              </form>
            ))}
          </div>
        </div>
        <div className="pt-8 lg:pt-0">
          <div className="flex gap-5 items-center">
            <h2 className="text-2xl">Add New Account</h2>{" "}
            <button
              onClick={() => {
                setNewAc(true);
              }}
              className="text-3xl font-black"
            >
              +
            </button>
          </div>
          {/* {isNewAc && <AddNew prev={SMac} />} */}
        </div>
      </section>
    </div>
  );
};

export default Social;
