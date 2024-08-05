import React from "react";

const Ignore = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></div>
  );
};

export default Ignore;

const html =
  "<p>hello,</p><p>this is ahsanul hoque.</p><h1><strong>I am here to announce that,</strong></h1><p>its may be my last message!</p><p>to do-</p><ol><li class='' >collect money</li><li>urao money</li><li>biriyani khao</li></ol>";
