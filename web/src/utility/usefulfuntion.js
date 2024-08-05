const timeConvert = (x) => {
  let newTime = x;
  let hrs = parseInt(newTime.split(":")[0]);
  let mins = newTime.slice(3, 5);
  var am_pm = newTime.slice(6, 8);
  if (hrs > 12) {
    hrs -= 12;
    am_pm = "PM";
  } else if (hrs == 12) {
    am_pm = "PM";
  } else if (hrs >= 0 && hrs < 12) {
    hrs = hrs;
    am_pm = "AM";
  }
  return (newTime = `${hrs}:${mins} ${am_pm}`);
};

const TimeRetrive = (x) => {
  // 12:30 PM
  // let newTime = x;
  // let hrs = newTime.slice(0, 2);
  // let mins = newTime.slice(3, 5);
  // var am_pm = newTime.slice(6, 8);
  // if (am_pm === "PM") {
  //   if (+hrs !== 12) {
  //     hrs += 12;
  //   } else {
  //     // if (hrs === 12) {
  //     hrs = 0;
  //     // }
  //   }
  // return { hrs, mins };
};
const dateConvert = (date) => {
  let d = new Date(date);
  return d.toDateString();
};

const randomColor = () => {
  hexaCharacter = ["A", "B", 1, "D", 6, "E", "F"];
  function getC(x) {
    return hexaCharacter[x];
  }
  let code = "#";
  for (let i = 0; i < 6; i++) {
    let position = Math.floor(Math.random() * hexaCharacter.length);
    code += getC(position);
  }
  return code;
};
const Randomposition = () => {
  const list = [5, 10, 16, 20, 28, 36];
  const value = Math.floor(Math.random() * list.length);

  return list[value];
};
const getBrightness = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
};
const getTextColor = (hexColor) => {
  const brightness = getBrightness(hexColor);
  return brightness > 128 ? "black" : "white";
};
export {
  timeConvert,
  TimeRetrive,
  dateConvert,
  randomColor,
  Randomposition,
  getTextColor,
};
