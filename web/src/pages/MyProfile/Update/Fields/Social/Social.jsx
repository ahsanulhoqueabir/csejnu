import { useEffect, useState } from "react";
import useUserdata from "../../../../../hooks/fetch/useUserdata";
import LoaderComponent from "../../../../Shared/LoaderComponent";
import SMCP from "../../../../../utility/iconname";

const Social = () => {
  const platforms = SMCP;
  const { loading, data, error } = useUserdata();
  const [contents, setContents] = useState([]);
  useEffect(() => {
    if (!loading) {
      setContents(data.social);
    }
  }, [loading]);

  if (loading) {
    return <LoaderComponent />;
  }
  const handleUpdate = (e) => {};
  // console.log(contents);
  return (
    <div>
      <h1 className="lg:text-2xl text-center">Social Media</h1>
      <div>
        <h2 className="text-lg">Edit Social Media Accounts</h2>
        <div className="space-y-2 py-5">
          {data.social.map((item, index) => (
            <div key={item._id} className=" flex gap-4">
              <h3 className="capitalize pl-1 bg-accent-content w-36 rounded">
                {item.platform}
              </h3>
              <input
                onChange={(e) => {
                  setContents([
                    ...contents,
                    (contents[index] = {
                      platform: item.platform,
                      link: e.target.value,
                    }),
                  ]);
                }}
                className="inputSocial"
                type="text"
                defaultValue={item.link}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg">Add New Account</h2>{" "}
        <div>
          <button className="text-xl">+</button>
        </div>
      </div>
    </div>
  );
};

export default Social;
