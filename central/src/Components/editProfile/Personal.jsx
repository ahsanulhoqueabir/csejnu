import React from "react";
import TextInput from "../common/inputs/TextInput";

const Personal = ({ data, setData }) => {
  const { name, about, photo, blood, religion, phone, birthday } = data;
  const { fullName, nickname } = name;
  console.log(data["personal.name.fullName"]);
  console.log(data);
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2 items-center">
        {fields.map((field, ind) => {
          if (field.type === "text") {
            return (
              <TextInput
                key={ind}
                setData={setData}
                prev={
                  field.name === "personal.name.fullName"
                    ? fullName
                    : field.name === "personal.name.nickname"
                    ? nickname
                    : field.name === "personal.about"
                    ? about
                    : field.name === "personal.photo"
                    ? photo
                    : field.name === "personal.blood"
                    ? blood
                    : field.name === "personal.religion"
                    ? religion
                    : field.name === "personal.phone"
                    ? phone
                    : field.name === "personal.birthday"
                    ? birthday
                    : ""
                }
                field={field}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Personal;
const fields = [
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
    options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    label: "Blood Group",
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
    options: ["Islam", "Hindu", "Christianity", "Buddhism", "Others"],
    label: "Religion",
    isRequired: true,
  },
  {
    name: "personal.gender",
    type: "select",
    placeholder: "Select Gender",
    options: ["M", "F"],
    label: "Gender",
    isRequired: true,
  },
];
