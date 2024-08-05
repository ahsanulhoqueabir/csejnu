import { useEffect, useState } from "react";

const useSocial = () => {
  const [included, setIncluded] = useState([]);
  const [social, setSocial] = useState([
    {
      platform: "facebook",
      username: "mdahsanulhoqueabir",
    },
  ]);

  useEffect(() => {
    social.map((p) => {
      const isIncluded = included.includes(p.platform);
      if (!isIncluded) {
        setIncluded([...included, p.platform]);
      }
    });
  }, [included]);
  return {
    included,
    setIncluded,
    social,
  };
};

export default useSocial;
