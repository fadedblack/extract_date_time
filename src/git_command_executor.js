const gitLocations = [
  "/Users/inkeetc/workspace/javascript//assignments/weekend_stuffs/rover_assignment/",
  "/Users/inkeetc/workspace/javascript//assignments/weekend_stuffs/zebra_assignment/",
  "/Users/inkeetc/workspace/javascript//assignments/weekend_stuffs/function_stuffs/",
  "/Users/inkeetc/workspace/javascript//assignments/power_set/",
  "/Users/inkeetc/workspace/javascript//assignments/number_to_words/",
  "/Users/inkeetc/workspace/javascript//assignments/organizing_data/",
  "/Users/inkeetc/workspace/javascript//assignments/patterns/",
  "/Users/inkeetc/workspace/javascript//assignments/guess_the_number/",
  "/Users/inkeetc/workspace/javascript//assignments/arrays/array_assignments1/",
  "/Users/inkeetc/workspace/javascript//assignments/arrays/array_assignments2/",
  "/Users/inkeetc/workspace/javascript//assignments/matrix_multiplication/",
  "/Users/inkeetc/workspace/javascript//test/functions/",
  "/Users/inkeetc/workspace/javascript//projects/snakeAndLadder/",
  "/Users/inkeetc/workspace/javascript//projects/loki/",
  "/Users/inkeetc/workspace/javascript//projects/calculator/",
  "/Users/inkeetc/workspace/javascript//projects/Enigma/",
  "/Users/inkeetc/workspace/javascript//projects/ticktactoe/",
  "/Users/inkeetc/workspace/javascript//projects/labyrinth/",
  "/Users/inkeetc/workspace/javascript//scripts/closure/",
  "/Users/inkeetc/workspace/javascript//scripts/shuffle/",
  "/Users/inkeetc/workspace/javascript//scripts/testing_framework/",
  "/Users/inkeetc/workspace/javascript//scripts/multiplication_table/",
  "/Users/inkeetc/workspace/javascript//scripts/animation/",
  "/Users/inkeetc/workspace/javascript//scripts/objects/",
  "/Users/inkeetc/workspace/javascript//scripts/is_number_power_of_2/",
  "/Users/inkeetc/workspace/javascript//scripts/scripts/",
  "/Users/inkeetc/workspace/javascript//scripts/sorting/",
  "/Users/inkeetc/workspace/javascript//scripts/map_filter_reduce/",
  "/Users/inkeetc/workspace/javascript//scripts/pattern/",
  "/Users/inkeetc/workspace/javascript//scripts/map_filter_reduce_practice/",
  "/Users/inkeetc/workspace/javascript//scripts/all_commit_logs/",
];

const extractGitLocations = function (workspaceLocation) {
  return `find ${workspaceLocation} -name '.git'`;
};

const commandsToExecute = function (filter, fields, stdOut) {
  return gitLocations.map(function (location) {
    return `git -C ${location} log | ${filter} | ${fields} >> ${stdOut}`;
  });
};

const displayCommands = function (commandsList) {
  commandsList.forEach((command) => console.log(command));
};

const timeStampCommands = commandsToExecute(
  "grep 'Date:'",
  "cut -d' ' -f4-8",
  "timestamps.txt"
);

const messageCommands = commandsToExecute(
  "grep '    '",
  "cut -d' ' -f5-500",
  "messages.txt"
);
