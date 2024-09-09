import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraphFM = ({ data }) => {
  const disp = [];
  data.forEach((d) => {
    disp.push({
      name: d.name.nickname,
      uv: d.votes.total,
      male: d.votes.male,
      female: d.votes.female,
    });
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={disp}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="male" stackId="a" fill="#96CEB4" />
        <Bar dataKey="female" stackId="a" fill="#41B3A2" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphFM;
