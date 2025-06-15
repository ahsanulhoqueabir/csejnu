import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts";
const SemesterResultGraph = ({ data }) => {
  const info = [
    {
      course: {
        _id: "6634a58a5a3dd1c63764d654",
        CourseCode: "CSE-1201",
        CourseTitle: "Object Oriented Programming-I",
        CourseType: "Major",
        Marks: 100,
        Credit: 3,
        code: "CC1201",
        semester: "S12",
        courseTeacher: "Dr. Md. Aminul Islam",
      },
      gp: 3.75,
      lg: "A",
      _id: "6666fbec6dc0bcdbd69f763b",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d655",
        CourseCode: "CSEL-1202",
        CourseTitle: "Object Oriented Programming I Lab",
        CourseType: "Major",
        Marks: 50,
        Credit: 1.5,
        code: "CC1202",
        semester: "S12",
        courseTeacher: "Dr. Md. Aminul Islam",
      },
      gp: 3.75,
      lg: "A",
      _id: "6666fbec6dc0bcdbd69f763c",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d656",
        CourseCode: "CSE-1203",
        CourseTitle: "Data structure",
        CourseType: "Major",
        Marks: 100,
        Credit: 3,
        code: "CC1203",
        semester: "S12",
        courseTeacher: "Arnisha Akhter",
      },
      gp: 3.5,
      lg: "A-",
      _id: "6666fbec6dc0bcdbd69f763d",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d657",
        CourseCode: "CSEL-1204",
        CourseTitle: "Data structure Lab",
        CourseType: "Major",
        Marks: 50,
        Credit: 1,
        code: "CC1204",
        semester: "S12",
        courseTeacher: "Arnisha Akhter",
      },
      gp: 4,
      lg: "A+",
      _id: "6666fbec6dc0bcdbd69f763e",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d658",
        CourseCode: "CSE-1205",
        CourseTitle: "Basic Electronics",
        CourseType: "Major",
        Marks: 100,
        Credit: 3,
        code: "CC1205",
        semester: "S12",
        courseTeacher: "Dr. Uzzal Kumar Acharjee",
      },
      gp: 3,
      lg: "B",
      _id: "6666fbec6dc0bcdbd69f763f",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d659",
        CourseCode: "CSEL-1206",
        CourseTitle: "Basic Electronics Lab",
        CourseType: "Major",
        Marks: 50,
        Credit: 1,
        code: "CC1206",
        semester: "S12",
        courseTeacher: "Dr. Uzzal Kumar Acharjee",
      },
      gp: 3.5,
      lg: "A-",
      _id: "6666fbec6dc0bcdbd69f7640",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d65a",
        CourseCode: "CSER-1207",
        CourseTitle: "Math II (Linear Algebra)",
        CourseType: "Non-Major",
        Marks: 100,
        Credit: 3,
        code: "CC1207",
        semester: "S12",
        courseTeacher: "Dr. Farhana Rashid",
      },
      gp: 2.5,
      lg: "C+",
      _id: "6666fbec6dc0bcdbd69f7641",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d65b",
        CourseCode: "CSE-1208",
        CourseTitle: "Discrete Mathematics",
        CourseType: "Major",
        Marks: 100,
        Credit: 3,
        code: "CC1209",
        semester: "S12",
        courseTeacher: "Dr. Selina Sharmin",
      },
      gp: 3,
      lg: "B",
      _id: "6666fbec6dc0bcdbd69f7642",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d65c",
        CourseCode: "CSER-1209",
        CourseTitle: "Economics",
        CourseType: "Non-Major",
        Marks: 50,
        Credit: 2,
        code: "CC1211",
        semester: "S12",
        courseTeacher: "Md Rabiul Karim",
      },
      gp: 3.5,
      lg: "A-",
      _id: "6666fbec6dc0bcdbd69f7643",
    },
    {
      course: {
        _id: "6634a58a5a3dd1c63764d65d",
        CourseCode: "CSEV-1210",
        CourseTitle: "Viva-Voce",
        CourseType: "Major",
        Marks: 50,
        Credit: 1,
        code: "CC1212",
        semester: "S12",
        courseTeacher: "All Faculty Member",
      },
      gp: 3.75,
      lg: "A",
      _id: "6666fbec6dc0bcdbd69f7644",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <LineChart width={1200} height={500} data={info}>
        <XAxis dataKey="course.CourseCode" />
        <YAxis />
        <Tooltip />
        <Line stroke="red" dataKey="gp"></Line>
      </LineChart>
    </div>
  );
};

export default SemesterResultGraph;
