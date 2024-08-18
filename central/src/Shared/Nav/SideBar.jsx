import React, { useRef, useState } from "react";
import { FaAngleLeft, FaTh } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import GetIcon from "../../utilities/Icon";

const SideBar = () => {
  const [isChecked, setChecked] = useState(false);
  const ref = useRef(null);
  const handleRouteChange = () => {
    if (ref.current) {
      ref.current.checked = false;
      setChecked(false);
    }
  };
  return (
    <div className="drawer z-[1200]">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={ref}
      />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer" className=" drawer-button cursor-pointer">
          <FaTh
            onClick={() => {
              setChecked(true);
            }}
            className={`size-4 lg:size-8 `}
          />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => {
            setChecked(false);
          }}
        ></label>
        {isChecked && (
          <div className=" fixed border border-neutral cursor-pointer rounded-lg left-[240px] z-[1250] top-2 text-3xl">
            <FaAngleLeft
              className="text-neutral"
              onClick={() => {
                ref.current.checked = false;
                setChecked(false);
              }}
            />
          </div>
        )}
        <ul
          className={`menu select-none  h-full overflow-auto flex flex-nowrap gap-1 w-72 p-4 relative bg-gradient-to-b from-[#D8EFD3] from-10% via-[#AAD7D9] via-60% to-[#222831] text-black ${
            isChecked ? "pt-12" : ""
          }`}
        >
          {/* In General Route */}
          {routes.map((route, index) => {
            {
              if (route.children?.length) {
                return (
                  <li key={route.name}>
                    <HeadRoute data={route} />
                    <ul className="ml-6 border-l-2 border-black">
                      {route.children.map((child, index) => (
                        <BasicRoute
                          key={child.name}
                          handleRouteChange={handleRouteChange}
                          data={child}
                        />
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <ParentRoute
                    data={route}
                    key={route.name}
                    handleRouteChange={handleRouteChange}
                  />
                );
              }
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

const routes = [
  {
    name: "Home",
    icon: "FaHome",
    pack: "fa",
    path: "/",
    isProtected: false,
    children: [],
  },
  {
    name: "Batch",
    icon: "FaUserGraduate",
    pack: "fa",
    path: "students",
    children: [
      {
        name: "13 Batch",
        icon: "FaUserGraduate",
        pack: "fa",
        path: "/batch/B210305",
      },
      {
        name: "12 Batch",
        icon: "FaUserGraduate",
        pack: "fa",
        path: "/batch/B200305",
      },
      {
        name: "11 Batch",
        icon: "FaUserGraduate",
        pack: "fa",
        path: "/batch/B190305",
      },
      {
        name: "10 Batch",
        icon: "FaUserGraduate",
        pack: "fa",
        path: "/batch/B180305",
      },
    ],
  },
  {
    name: "Courses",
    icon: "FaBook",
    pack: "fa",
    path: "courses",
  },
  {
    name: "Class Routine",
    icon: "FaCalendar",
    pack: "fa",
    path: "class-routine",
  },
  {
    name: "Overview",
    icon: "FaInfo",
    pack: "fa",
    path: "overview",
  },
  {
    name: "Query Students",
    icon: "FaSearch",
    pack: "fa",
    path: "/query-students",
  },
];

const BasicRoute = ({ data, handleRouteChange }) => {
  return (
    <li className="py-[1px]" onClick={handleRouteChange}>
      <NavLink className="text-lg font-medium py-0" to={data.path}>
        {data.name}
      </NavLink>
    </li>
  );
};
const ParentRoute = ({ data, handleRouteChange }) => {
  return (
    <li onClick={handleRouteChange}>
      <NavLink to={data.path} className="text-xl font-medium">
        <GetIcon className={""} icon={data.icon} lib={data.pack} />{" "}
        <span className="">{data.name}</span>
      </NavLink>
    </li>
  );
};
const HeadRoute = ({ data, handleRouteChange }) => {
  return (
    <p className="text-xl pb-0 font-medium ">
      <GetIcon className={""} icon={data.icon} lib={data.pack} />{" "}
      <span>{data.name}</span>
    </p>
  );
};
