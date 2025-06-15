import GetIcon from "../../utilities/Icon";
import { setTitle } from "../../utilities/functions";
import { Link } from "react-router-dom";
const BreadCrumb = ({ routes, page }) => {
  const paths = routes || pages[page];
  setTitle(page);
  return (
    <div className="breadcrumbs text-sm lg:text-xl -mt-10 py-5 select-none">
      <ul>
        {paths?.slice(0, paths.length - 1).map((page, index) => (
          <Bread key={index} page={page} />
        ))}
        <LastBread page={paths[paths?.length - 1]} />
      </ul>
      <hr className="mt-5" />
    </div>
  );
};

export default BreadCrumb;
const Bread = ({ page }) => {
  return (
    <li>
      <Link className="flex gap-2 items-center" to={page.path}>
        <GetIcon icon={page.icon} lib={page.pack} />
        {page.name}
      </Link>
    </li>
  );
};
const LastBread = ({ page }) => {
  return (
    <p className="inline-flex items-center gap-2 ">
      <GetIcon icon={page.icon} lib={page.pack} />
      <span className="ordinal">{page.name}</span>
    </p>
  );
};

const pages = {
  courses: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Courses",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  overview: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Overview",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  B220305: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Batch",
      icon: "FaFolderOpen",
      pack: "fa",
      path: "/",
    },
    {
      name: "14th Batch",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  B210305: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Batch",
      icon: "FaFolderOpen",
      pack: "fa",
      path: "/",
    },
    {
      name: "13th Batch",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  B200305: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Batch",
      icon: "FaFolderOpen",
      pack: "fa",
      path: "/",
    },
    {
      name: "12th Batch",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  B190305: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Batch",
      icon: "FaFolderOpen",
      pack: "fa",
      path: "/",
    },
    {
      name: "11th Batch",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  B180305: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Batch",
      icon: "FaFolderOpen",
      pack: "fa",
      path: "/",
    },
    {
      name: "10th Batch",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  "class-routine": [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Class Routine",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  Faculty: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Faculty",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  Edit: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Edit Profile",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
  Holidays: [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: "Academic Holidays",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ],
};
