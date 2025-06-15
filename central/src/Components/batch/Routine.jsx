import { useState } from "react";
import Accordion from "./Accordion";

const Routine = ({ data, batchid }) => {
  const classes = [];
  data.map((item) => {
    const md = {
      day: item.day,
    };
    if (item.batches[batchid]?.periods) {
      md.periods = item.batches[batchid].periods;
    }
    classes.push(md);
  });
  return (
    <div className="bg-base-300 text-info-content  rounded-lg">
      <Accordion classes={classes} batch={batchid} />
    </div>
  );
};

export default Routine;
