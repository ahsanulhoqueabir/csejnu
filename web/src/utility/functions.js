const getImage = (path, name) => {
  return new URL(`../assets/${path}/${name}`, import.meta.url).href;
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

const dateDifference = (date) => {
  const currentDate = new Date();
  const postDate = new Date(date);
  const diffTime = Math.abs(currentDate - postDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 0) {
    return "Today";
  }
  if (diffDays === 1) {
    return "Yesterday";
  }
  if (diffDays < 31) `${diffDays} days ago`;
  if (diffDays < 30 * 12) {
    return `${Math.floor(diffDays / 30)} months ago`;
  }
  return `${Math.floor(diffDays / (30 * 12))} years ago`;
};
const getDate = (date) => {
  const postDate = new Date(date);
  return postDate.toDateString();
};
const dateInput = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
export { getImage, getSemester, dateDifference, getDate, dateInput };
