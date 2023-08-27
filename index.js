const addDays = require("date-fns/addDays");
const getDateAfterAddingDays = (day) => {
  const newDate = addDays(new Date(2020, 7, 22), day);
  console.log(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterAddingDays;

// getDateAfterAddingDays(5);
