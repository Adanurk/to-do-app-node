const prompt = require("prompt-sync")({ sigint: true });

//npm i inquirer or
//prompt-sync
//npm i prompt sync

//-----------------------------------------------------------------//

//our variables

let todoList = [
  { id: 1, text: "jogging", done: false },
  { id: 2, text: "cleaning", done: false },
  { id: 3, text: "live code", done: false },
];

let commandList = [
  { id: 1, text: "show to do list" },
  { id: 2, text: "delete any TODO" },
  { id: 3, text: "update any TODO" },
  { id: 4, text: "show pending TODO" },
  { id: 4, text: "show done TODO" },
];

//printing command list

for (const item of commandList) {
    console.log(`${item["id"]}: ${item["text"]}`);
}

//entering a command

let input = +prompt("Enter a command number: ");
console.log(input);

switch (input) {
    case 1: //show to do list
    for (const item of todoList) {
      console.log(`Task ${item["id"]}: ${item["text"]}`);
    }
    break;
    case 2: //delete any todo
    let del = +prompt("Enter the number of task you want to delete: ");
    let deleteTodo = function(num){
        let ourVal = 

    }

    break;
  case 3: //update any todo
    break;
  case 4: //show pending todos
    break;
  case 5: //show done todos
    break;
  default:
    console.log("Enter a command number");
    break;
}
