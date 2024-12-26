const gitLocations = [
  "/Users/inkeetc/Dev/javascript//assignments/weekend_stuffs/rover_assignment/",
  "/Users/inkeetc/Dev/javascript//assignments/weekend_stuffs/zebra_assignment/",
  "/Users/inkeetc/Dev/javascript//assignments/weekend_stuffs/function_stuffs/",
  "/Users/inkeetc/Dev/javascript//assignments/power_set/",
  "/Users/inkeetc/Dev/javascript//assignments/number_to_words/",
  "/Users/inkeetc/Dev/javascript//assignments/organizing_data/",
  "/Users/inkeetc/Dev/javascript//assignments/patterns/",
  "/Users/inkeetc/Dev/javascript//assignments/guess_the_number/",
  "/Users/inkeetc/Dev/javascript//assignments/arrays/array_assignments1/",
  "/Users/inkeetc/Dev/javascript//assignments/arrays/array_assignments2/",
  "/Users/inkeetc/Dev/javascript//assignments/matrix_multiplication/",
  "/Users/inkeetc/Dev/javascript//test/functions/",
  "/Users/inkeetc/Dev/javascript//projects/snakeAndLadder/",
  "/Users/inkeetc/Dev/javascript//projects/loki/",
  "/Users/inkeetc/Dev/javascript//projects/calculator/",
  "/Users/inkeetc/Dev/javascript//projects/Enigma/",
  "/Users/inkeetc/Dev/javascript//projects/ticktactoe/",
  "/Users/inkeetc/Dev/javascript//projects/labyrinth/",
  "/Users/inkeetc/Dev/javascript//scripts/closure/",
  "/Users/inkeetc/Dev/javascript//scripts/shuffle/",
  "/Users/inkeetc/Dev/javascript//scripts/testing_framework/",
  "/Users/inkeetc/Dev/javascript//scripts/multiplication_table/",
  "/Users/inkeetc/Dev/javascript//scripts/animation/",
  "/Users/inkeetc/Dev/javascript//scripts/objects/",
  "/Users/inkeetc/Dev/javascript//scripts/is_number_power_of_2/",
  "/Users/inkeetc/Dev/javascript//scripts/scripts/",
  "/Users/inkeetc/Dev/javascript//scripts/sorting/",
  "/Users/inkeetc/Dev/javascript//scripts/map_filter_reduce/",
  "/Users/inkeetc/Dev/javascript//scripts/pattern/",
  "/Users/inkeetc/Dev/javascript//scripts/map_filter_reduce_practice/",
];

const commandToExecute = gitLocations.map(function (location) {
  const timeStamps = "cut -d' ' -f4-8";
  const stdOut = "all_commit_timestamps.txt";
  const filterByDate = " grep 'Date:'";

  return `git -C ${location} log | ${filterByDate} | ${timeStamps} >> ${stdOut}`;
});

for (const command of commandToExecute) {
  console.log(command);
}
