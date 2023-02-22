/* Date Configurations start */

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const getYear = wholeDate => {
  return wholeDate.getFullYear().toString().substr(-2);
};

const currentDate = new Date();

const startDateOfCurrentQuater = new Date();
startDateOfCurrentQuater.setMonth(currentDate.getMonth() - 2);

const previousMonth = new Date();
previousMonth.setMonth(currentDate.getMonth() - 1);

function getMondays() {
  var d = new Date(),
    month = d.getMonth(),
    mondays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 1) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    const pushDate = new Date(d.getTime());
    mondays.push(pushDate);
    d.setDate(d.getDate() + 7);
  }

  return mondays;
}

/* Date Configurations end */
