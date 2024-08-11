import { useState } from "react";
import Banner from "../../../components/Banner";
import Personal from "./Fields/Personal";
import LoadingPage from "../../Shared/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage";
import useUserdata from "../../../hooks/fetch/useUserdata";
import Social from "./Fields/Social/Social";
import "./update.css";
const Update = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { loading, data, error } = useUserdata();
  const [element, setElement] = useState(fields[activeTab].content);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div>
      <Banner>Update Info</Banner>
      <div className=" py-6 px-5 lg:px-16 no-scrollbar overflow-x-auto">
        {fields.map((field, index) => (
          <input
            key={index}
            type="radio"
            role="tab"
            className={`tab ${
              activeTab === index
                ? "border-b-2 opacity-100 transition-opacity  duration-300"
                : ""
            } `}
            aria-label={field.name}
            defaultChecked={index === 0}
            onClick={() => {
              setActiveTab(index);
              setElement(field.content);
            }}
          />
        ))}

        <div className="pt-3 lg:px-10">{element}</div>
      </div>
    </div>
  );
};

export default Update;

const fields = [
  {
    name: "Personal",
    content: <Personal />,
  },
  {
    name: "Social",
    content: <Social />,
  },
  {
    name: "Education",
    content: <p>Education</p>,
  },
  {
    name: "Address",
    content: <p>Address</p>,
  },
  {
    name: "Skills",
    content: <p>Skills</p>,
  },
  {
    name: "Hobby",
    content: <p>Hobby</p>,
  },
  {
    name: "Achievment",
    content: <p>Achievment</p>,
  },
];
