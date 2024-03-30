import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "first number" },
  { message: "enter second number", type: "number", name: "second number" },
  {
    message: "select an operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

console.log(answer);

//conditional statement
