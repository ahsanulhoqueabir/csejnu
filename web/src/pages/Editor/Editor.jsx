import React, { useEffect, useRef, useState } from "react";
import Ignore from "../Tutorial/courseWise/details/Ignore/Ignore";

const Editor = () => {
  const textRef = useRef(null);
  const [text, setText] = useState("");
  const [innerHTML, setInnerHTML] = useState();
  const [innerText, setInnerText] = useState();

  useEffect(() => {
    setInnerHTML(textRef.current.innerHTML);
    setInnerText(textRef.current.innerText);
  }, [textRef]);
  console.log(innerText);

  return (
    <div className="p-10">
      <div></div>
      <div
        ref={textRef}
        onKeyDown={(e) => {
          //   console.log(e.target.innerHTML);
          setInnerHTML(e.target.innerHTML);
          setInnerText(e.target.innerText);
        }}
        className="h-56 w-full border border-info-content rounded-sm focus:outline-none p-3 select-info-content"
        contentEditable
      ></div>
      <div
        className=" list-disc"
        dangerouslySetInnerHTML={{
          __html: innerHTML,
        }}
      ></div>
    </div>
  );
};

export default Editor;
