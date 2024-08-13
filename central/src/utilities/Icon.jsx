import React, { useEffect, useState } from "react";
import * as fa6 from "react-icons/fa6";
import * as fa from "react-icons/fa";
import cn from "./cn";

const iconpack = {
  fa6: fa6,
  fa: fa,
};

const GetIcon = ({ icon, lib, className }) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    if (iconpack[lib] && iconpack[lib][icon]) {
      setIcon(() => iconpack[lib][icon]);
    }
  }, [icon, lib]);

  return <>{Icon && <Icon className={cn(`text-lg ${className}`)} />}</>;
};

export default GetIcon;
