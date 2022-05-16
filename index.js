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
  { id: 5, text: "show done TODO" },
  {id:6, text:"add new TODO"}
];

//printing command list

for (const item of commandList) {
    console.log(`${item["id"]}: ${item["text"]}`);
}

//entering a command

let input = +prompt("Enter a command number: ");

switch (input) {
    case 1: //show to do list
    for (const item of todoList) {
      console.log(`Task ${item["id"]}: ${item["text"]}`);
    }
    break;
    case 2: //delete any todo
    let deleteNum =  +prompt("Enter the number of task you want to delete: ");
    let ourTask;
    for (const item of todoList) {
        if(item["id"]===deleteNum){
            ourTask = item;
        }
    }

    console.log(ourTask);


    let removeTodo = function(){

    }

    break;
  case 3: //Update items as done

  let editTodo = function(){

  }

    break;
  case 4: //show pending todos //console log the tasks with done property false 

  let pendingTodo  =function(){

  }

    break;
  case 5: //show done todos //done property true

  let doneTodos = function(){

  }

    break;
    case 6: //adding new TODO item //Don’t allow adding empty items

    let insertTodo = function(){

    }


    break;
  default:
    console.log("Enter a command number");
    break;
}
