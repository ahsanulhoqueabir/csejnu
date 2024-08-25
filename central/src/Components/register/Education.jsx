import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import NumberField from "./fields/NumberField";

const Education = ({ setData }) => {
  return (
    <>
      <h1 className="text-xl py-7 lg:text-3xl font-philosopher text-center">
        {" "}
        Education Info
      </h1>
      <div className="grid gap-5 lg:grid-cols-2 items-center">
        {fields.map((field, ind) => {
          if (field.type === "text") {
            return <TextField key={ind} setData={setData} field={field} />;
          } else if (field.type === "select") {
            return <SelectField key={ind} setData={setData} field={field} />;
          } else if (field.type === "number") {
            return <NumberField key={ind} setData={setData} field={field} />;
          }
        })}
      </div>
    </>
  );
};

export default Education;

const fields = [
  {
    name: "education.1.institution",
    type: "text",
    label: "College Name",
    placeholder: "College Name",
    isRequired: true,
  },
  {
    name: "education.1.startYear",
    type: "number",
    label: "Collge Start Year",
    placeholder: "Collge Start Year",
    isRequired: true,
  },
  {
    name: "education.1.passingYear",
    type: "number",
    label: "Collge Passing Year",
    placeholder: "Collge Passing Year",
    isRequired: true,
  },
  {
    name: "education.1.board",
    type: "select",
    label: "Education Board(Collge)",
    placeholder: "Education Board(Collge)",
    options: [
      "Barishal",
      "Chattogram",
      "Cumilla",
      "Dhaka",
      "Dinajpur",
      "Jashore",
      "Rajshahi",
      "Mymensingh",
      "Sylhet",
    ],
    isRequired: true,
  },
  {
    name: "education.2.institution",
    type: "text",
    label: "School Name",
    placeholder: "School Name",
    isRequired: true,
  },
  {
    name: "education.2.startYear",
    type: "number",
    label: "School Start Year",
    placeholder: "School Start Year",
    isRequired: true,
  },
  {
    name: "education.2.passingYear",
    type: "number",
    label: "School Passing Year",
    placeholder: "School Passing Year",
    isRequired: true,
  },
  {
    name: "education.2.board",
    type: "select",
    label: "Education Board(School)",
    placeholder: "Education Board(School)",
    options: [
      "Barishal",
      "Chattogram",
      "Cumilla",
      "Dhaka",
      "Dinajpur",
      "Jashore",
      "Rajshahi",
      "Mymensingh",
      "Sylhet",
    ],
    isRequired: true,
  },
];
