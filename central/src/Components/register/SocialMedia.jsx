import TextField from "./fields/TextField";

const SocialMedia = ({ setData }) => {
  return (
    <>
      <h1 className="text-xl py-7 lg:text-3xl font-philosopher text-center">
        {" "}
        Social Media
      </h1>
      <div className="grid gap-5 lg:grid-cols-2 items-center">
        {fields.map((field, index) => (
          <TextField key={index} field={field} setData={setData} />
        ))}
      </div>
      <div></div>
    </>
  );
};

export default SocialMedia;

const fields = [
  {
    name: "profiles.social.facebook",
    type: "text",
    label: "Facebook",
    placeholder: "Facebook",
    isRequired: true,
  },
  {
    name: "profiles.social.linkedin",
    type: "text",
    label: "LinkedIn",
    placeholder: "LinkedIn",
    isRequired: false,
  },
  {
    name: "profiles.social.instagram",
    type: "text",
    label: "Instagram",
    placeholder: "Instagram",
    isRequired: false,
  },
  {
    name: "profiles.coding.github",
    type: "text",
    label: "Github",
    placeholder: "Github",
    isRequired: false,
  },
];
