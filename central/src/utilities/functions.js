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
const getBatch = (code) => {
  if (code === "B240305") {
    return `16th Batch`;
  }
  if (code === "B230305") {
    return `15th Batch`;
  }
  if (code === "B220305") {
    return `14th Batch`;
  }
  if (code === "B210305") {
    return `13th Batch`;
  }
  if (code === "B200305") {
    return `12th Batch`;
  }
  if (code === "B190305") {
    return `11th Batch`;
  }
  if (code === "B180305") {
    return `10th Batch`;
  }
};

export { getImage, setTitle, getSemester, getBatch };
