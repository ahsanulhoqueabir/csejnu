const getImage = (path, name) => {
  return new URL(`../assets/${path}/${name}`, import.meta.url).href;
};

const setTitle = (name) => {
  document.title = `${name} - CSEJnU`;
};
const getSemester = (code) => {
  if (code === "S11") {
    return "1st Year,1st Semester";
  }
  if (code === "S12") {
    return "1st Year,2nd Semester";
  }
  if (code === "S21") {
    return "2nd Year,1st Semester";
  }
  if (code === "S22") {
    return "2nd Year,2nd Semester";
  }
  if (code === "S31") {
    return "3rd Year,1st Semester";
  }
  if (code === "S32") {
    return "3rd Year,2nd Semester";
  }
  if (code === "S41") {
    return "4th Year,1st Semester";
  }
  if (code === "S42") {
    return "4th Year,2nd Semester";
  }
};

export { getImage, setTitle, getSemester };
