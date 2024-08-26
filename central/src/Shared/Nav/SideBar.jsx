import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaTh } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import GetIcon from "../../utilities/Icon";
import useAuth from "../../Hooks/useAuth";
import RouteControl from "./RouteControl";
import useAxiosSecure from "../../Hooks/axios/useAxiosSecure";
import User from "./User";

const SideBar = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userInfo, setUserInfo] = useState();
  const [isChecked, setChecked] = useState(false);
  const ref = useRef(null);
  const handleRouteChange = () => {
    if (ref.current) {
      ref.current.checked = false;
      setChecked(false);
    }
  };
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/auth/login?email=${user?.email}`)
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((err) => {
          // console.log(err);
          toast("You are not registered!");
        });
    }
  }, [user]);
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
          {user && userInfo && <User user={userInfo} />}
          {/* In General Route */}
          <RouteControl handleRouteChange={handleRouteChange} routes={routes} />
          {/* In Student Route */}
          {user && (
            <RouteControl
              routes={studentRoutes}
              handleRouteChange={handleRouteChange}
            />
          )}
          {/* In Admin Route */}
          {user && userInfo?.role === "admin" && (
            <RouteControl
              routes={adminRoutes}
              handleRouteChange={handleRouteChange}
            />
          )}
          {user ? (
            <Logout handleRouteChange={handleRouteChange} />
          ) : (
            <ParentRoute
              data={{
                name: "Login",
                icon: "FaSignInAlt",
                pack: "fa",
                path: "/login",
              }}
              handleRouteChange={handleRouteChange}
            />
          )}
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
        name: "14 Batch",
        icon: "FaUserGraduate",
        pack: "fa",
        path: "/batch/B220305",
      },
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
    name: "Faculty",
    icon: "FaChalkboardTeacher",
    pack: "fa",
    path: "faculty",
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
  {
    name: "Register",
    icon: "FaUserPlus",
    pack: "fa",
    path: "/register",
  },
];
const studentRoutes = [
  {
    name: "Profile",
    icon: "FaUser",
    pack: "fa",
    path: "/student-profile",
  },
];
const adminRoutes = [
  {
    name: "Manage Students",
    icon: "FaUserGraduate",
    pack: "fa",
    path: "/manage-students",
  },
];
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

const Logout = ({ handleRouteChange }) => {
  const { setUser, logout } = useAuth();
  return (
    <li className="" onClick={logout}>
      <p onClick={handleRouteChange} className="text-xl  font-medium ">
        <GetIcon className={""} icon={"FaSignOutAlt"} lib={"fa"} />{" "}
        <span>Logout</span>
      </p>
    </li>
  );
};
