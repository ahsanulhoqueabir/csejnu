import { FaAngleLeft, FaTh, FaXRay } from "react-icons/fa";
import GetIcon from "../../utility/icons";
import { Link, NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SideBar = () => {
  const { loader, role } = useRole();
  const [isChecked, setChecked] = useState(false);
  const { user } = useAuth();
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
          <div className=" fixed border border-info-content cursor-pointer rounded-lg left-[240px] z-[1250] top-2 text-3xl">
            <FaAngleLeft
              onClick={() => {
                ref.current.checked = false;
                setChecked(false);
              }}
            />
          </div>
        )}
        <ul
          className={`menu select-none  h-full overflow-auto flex flex-nowrap w-72 p-4 relative bg-gradient-to-b from-[#D8EFD3] from-10% via-[#AAD7D9] via-60% to-[#222831] text-black ${
            isChecked ? "pt-12" : ""
          }`}
        >
          {/* In General Route */}
          {routes.map((route, index) => {
            {
              if (route.children?.length) {
                return route.isProtected ? (
                  <>
                    {user && (
                      <li key={route.name}>
                        <HeadRoute data={route} />
                        <ul className="ml-8">
                          {route.children.map((child, index) => (
                            <>
                              {child.isProtected ? (
                                role && (
                                  <BasicRoute
                                    key={child.name}
                                    handleRouteChange={handleRouteChange}
                                    data={child}
                                  />
                                )
                              ) : (
                                <BasicRoute
                                  key={child.name}
                                  handleRouteChange={handleRouteChange}
                                  data={child}
                                />
                              )}
                            </>
                          ))}
                        </ul>
                      </li>
                    )}
                  </>
                ) : (
                  <li key={route.name}>
                    <HeadRoute data={route} />
                    <ul className="ml-8">
                      {route.children.map((child, index) => (
                        <>
                          {child.isProtected ? (
                            role && (
                              <BasicRoute
                                key={child.name}
                                handleRouteChange={handleRouteChange}
                                data={child}
                              />
                            )
                          ) : (
                            <BasicRoute
                              key={child.name}
                              handleRouteChange={handleRouteChange}
                              data={child}
                            />
                          )}
                        </>
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
          {/* Admin Specified Route  */}
          {role === "admin" &&
            AdminRoute.map((route, index) => {
              if (route.children?.length) {
                return (
                  <li key={index}>
                    <HeadRoute data={route} />
                    <ul className="ml-8">
                      {route.children.map((child, index) => (
                        <>
                          {child.isProtected ? (
                            role && (
                              <BasicRoute
                                key={child.name}
                                handleRouteChange={handleRouteChange}
                                data={child}
                              />
                            )
                          ) : (
                            <BasicRoute
                              key={child.name}
                              handleRouteChange={handleRouteChange}
                              data={child}
                            />
                          )}
                        </>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <ParentRoute
                    data={route}
                    handleRouteChange={handleRouteChange}
                  />
                );
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
    name: "Academic",
    icon: "FaBookOpen",
    pack: "fa",
    path: "/academic",
    children: [
      {
        name: "Routine",
        icon: "FaCalendarCheck",
        pack: "fa",
        path: "/academic/routine",
        isProtected: false,
      },
      {
        name: "Notes",
        icon: "FaNoteSticky",
        pack: "fa6",
        path: "/academic/notes",
        isProtected: true,
      },
      {
        name: "Tutorials",
        icon: "FaNoteSticky",
        pack: "fa6",
        path: "/academic/tutorial-online",
        isProtected: true,
      },
      {
        name: "Add Tutorial",
        icon: "",
        pack: "",
        path: "/academic/addtutorial",
        isProtected: true,
      },
      {
        name: "Question Bank",
        icon: "FaQuestion",
        pack: "fa",
        path: "/academic/question-bank",
        isProtected: true,
      },
    ],
  },
  {
    name: "Students",
    icon: "FaUsers",
    pack: "fa",
    path: "/students",
    children: [
      {
        name: "Profile",
        icon: "FaUsers",
        pack: "fa",
        path: "/students/profileCard",
        isProtected: false,
      },
      {
        name: "ID Card",
        icon: "FaUsers",
        pack: "fa",
        path: "/students/idCard",
        isProtected: true,
      },
    ],
  },
  {
    name: "Manage Notes",
    icon: "FaFileSignature",
    pack: "fa",
    isProtected: true,
    children: [
      {
        name: "My Notes",
        path: "/mynotes",
        isProtected: true,
      },
      {
        name: "Add Note",
        path: "/addNote",
        isProtected: true,
      },
    ],
  },

  {
    name: "Faculty",
    icon: "FaUserTie",
    pack: "fa",
    path: "faculty",
  },
];

const AdminRoute = [
  {
    name: "Manage Notice",
    icon: "FaAlgolia",
    pack: "fa",
    path: "",
    children: [
      {
        name: "Upcoming Notices",
        path: "/admin/upcoming-notices",
      },
      {
        name: "Add Notice",
        path: "/admin/addNotice",
      },
      {
        name: "Send Mail",
        path: "/admin/sendmail",
      },
    ],
  },
  {
    name: "Manage Student",
    icon: "FaUsers",
    pack: "fa",
    path: "/admin/manageusers",
  },
];

const BasicRoute = ({ data, handleRouteChange }) => {
  return (
    <li className=" " onClick={handleRouteChange}>
      <NavLink className="" to={data.path}>
        {data.name}
      </NavLink>
    </li>
  );
};
const ParentRoute = ({ data, handleRouteChange }) => {
  return (
    <li onClick={handleRouteChange}>
      <NavLink to={data.path} className="text-xl font-semibold">
        <GetIcon className={""} icon={data.icon} lib={data.pack} />{" "}
        <span>{data.name}</span>
      </NavLink>
    </li>
  );
};
const HeadRoute = ({ data, handleRouteChange }) => {
  return (
    <p className="text-xl font-semibold ">
      <GetIcon className={""} icon={data.icon} lib={data.pack} />{" "}
      <span>{data.name}</span>
    </p>
  );
};
