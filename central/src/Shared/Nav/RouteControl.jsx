import { NavLink } from "react-router-dom";
import GetIcon from "../../utilities/Icon";

const RouteControl = ({ routes, handleRouteChange }) => {
  return (
    <>
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
    </>
  );
};

export default RouteControl;

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
