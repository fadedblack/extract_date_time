const dates = [
  "Dec 21 14:08:49 2024",
  "Dec 21 13:39:16 2024",
  "Dec 21 13:17:42 2024",
  "Dec 25 12:37:36 2024",
  "Dec 25 12:36:03 2024",
  "Dec 21 13:37:48 2024",
  "Dec 21 21:44:46 2024",
  "Dec 21 15:50:29 2024",
  "Dec 21 13:57:12 2024",
  "Dec 21 13:07:37 2024",
];

const dateMapper = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

dates.map(function (date) {
  const [month, day, time, year] = date.split(" ");
  return `${day}-${dateMapper[month]}-${year} ${time}`;
});
