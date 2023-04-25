const fs = require("fs");
const input = require("./input.json");
const isConvertible = require("./tasks/task1.js");
const findDuplicates = require("./tasks/task2.js");
const getMinNextWeight = require("./tasks/task3.1.js");
const getTShirtSolution = require("./tasks/task3.2.js");
const getSpotlightPositionCount = require("./tasks/task4.js");

const output = {};

output["task1"] = input["task1"].map((value) =>
  isConvertible(value.from, value.to)
);

output["task2"] = input["task2"].map((value) => findDuplicates(value));

output["task3.1"] = input["task3.1"].map((value) => getMinNextWeight(value));

output["task3.2"] = input["task3.2"].map((value) =>
  getTShirtSolution(value.tShirts, value.requests)
);

output["task4"] = input["task4"].map((value) =>
  getSpotlightPositionCount(value)
);

fs.writeFile("output.json", JSON.stringify(output, null, 2), (err) => {
  if (err) {
    throw err;
  }
});
