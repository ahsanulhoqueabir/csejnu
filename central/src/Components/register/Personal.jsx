import DateField from "./fields/DateField";
import FileField from "./fields/FileField";
import SelectField from "./fields/SelectField";
import TextField from "./fields/TextField";

const Personal = ({ setData }) => {
  return (
    <>
      <h1 className="text-xl py-5 lg:text-3xl font-philosopher text-center">
        {" "}
        Personal Info
      </h1>
      <div className="grid gap-5 lg:grid-cols-2 items-center">
        {fields.map((field, ind) => {
          if (field.type === "text") {
            return <TextField key={ind} setData={setData} field={field} />;
          } else if (field.type === "select") {
            return <SelectField key={ind} setData={setData} field={field} />;
          } else if (field.type === "file") {
            return <FileField key={ind} setData={setData} field={field} />;
          } else if (field.type === "date") {
            return <DateField key={ind} setData={setData} field={field} />;
          }
        })}
      </div>
    </>
  );
};

export default Personal;

const fields = [
  {
    type: "select",
    name: "batch",
    placeholder: "Select Your Batch",
    options: [
      { value: "B230305", label: "15th Batch" },
      { value: "B220305", label: "14th Batch" },
    ],
    label: "Select Your Batch",
    isRequired: true,
  },
  {
    name: "id",
    type: "text",
    placeholder: "Enter Your Student ID",
    label: "Enter Your Student ID",
    isRequired: true,
  },
  {
    name: "personal.name.fullName",
    type: "text",
    placeholder: "Enter full name",
    label: "Your Full Name",
    isRequired: true,
  },
  {
    name: "personal.name.nickname",
    type: "text",
    placeholder: "Enter nickname",
    label: "Your Nickname",
    isRequired: false,
  },
  {
    name: "personal.about",
    type: "text",
    placeholder: "Enter about",
    label: "About",
    isRequired: false,
  },
  {
    name: "personal.photo",
    type: "file",
    placeholder: "Enter profile picture",
    label: "Profile Picture",
    isRequired: false,
  },
  {
    name: "personal.blood",
    type: "select",
    placeholder: "Enter blood group",
    options: [
      { value: "A+", label: "A+" },
      { value: "A-", label: "A-" },
      { value: "B+", label: "B+" },
      { value: "B-", label: "B-" },
      { value: "O+", label: "O+" },
      { value: "O-", label: "O-" },
      { value: "AB+", label: "AB+" },
      { value: "AB-", label: "AB-" },
    ],
    label: "Blood Group",
    isRequired: true,
  },
  {
    name: "personal.email",
    type: "text",
    placeholder: "Enter email",
    label: "Email",
    isRequired: true,
  },
  {
    name: "personal.phone",
    type: "text",
    placeholder: "Enter phone number",
    label: "Phone",
    isRequired: false,
  },
  {
    name: "personal.birthday",
    type: "date",
    placeholder: "Enter birthday",
    label: "Birthday",
    isRequired: true,
  },
  {
    name: "personal.religion",
    type: "select",
    placeholder: "Enter religion",
    // options: ["Islam", "Hindu", "Christianity", "Buddhism", "Others"],
    options: [
      { value: "Islam", label: "Islam" },
      { value: "Hindu", label: "Hindu" },
      { value: "Christianity", label: "Christianity" },
      { value: "Buddhism", label: "Buddhism" },
      { value: "Others", label: "Others" },
    ],
    label: "Religion",
    isRequired: true,
  },
  {
    name: "personal.gender",
    type: "select",
    placeholder: "Select Gender",
    // options: ["M", "F"],
    options: [
      {
        value: "M",
        label: "Male",
      },
      {
        value: "F",
        label: "Female",
      },
    ],
    label: "Gender",
    isRequired: true,
  },
  {
    name: "addressInfo.current.location",
    type: "text",
    placeholder: "Enter location",
    label: "Location(Just Area Name)",
    isRequired: false,
  },
];
