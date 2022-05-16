const prompt = require("prompt-sync")({ sigint: true });

//npm i inquirer or
//prompt-sync
//npm i prompt sync

//----------------------------------//

//----------VARIABLES--------------//

let todoList = [
  { id: 1, text: "jogging", done: false },
  { id: 2, text: "cleaning", done: true },
  { id: 3, text: "live code", done: false },
];

let commandList = [
  { id: 1, text: "show to do list" },
  { id: 2, text: "delete any TODO" },
  { id: 3, text: "update any TODO" },
  { id: 4, text: "show pending TODO" },
  { id: 5, text: "show done TODO" },
  { id: 6, text: "add new TODO" },
  { id: 7, text: "edit task" },
];

//----------FUNCTIONS-------------//

//removing specific task
let removeTodo = function (deleteNum) {
  todoList = todoList.filter((element) => element.id !== deleteNum);
  console.table(todoList);

  //another option:
  // let ourTask;
  // let index = todoList.findIndex(el => el.id === deleteNum);
  // console.log(index);
  // todoList.splice(index,1);

  //another try, long one:
  // for (const item of todoList) {
  //     if(item["id"]===deleteNum){
  //         ourTask = item;
  //     }
  // }
};

//showing done tasks
let doneTodos = function () {
  let doneTodo = todoList.filter((element) => element["done"] === true);
  console.table(doneTodo);
};
//showing tasks in progress
let pendingTodo = function () {
  let stillTodo = todoList.filter((element) => element["done"] === false);
  console.table(stillTodo);
};
//inserting a new task
let insertTodo = function (str) {
  let newTask = {};
  newTask["text"] = str;
  newTask["id"] = todoList.length + 1;
  newTask["done"] = false;
  todoList.push(newTask);
  return todoList;
};

//updating tasks

let updateTodo = function (x) {
  //console.log(todoList[x-1]);
  todoList[x - 1].done = true;
  return todoList;
};

//editing tasks
let editTodo = function (num, text) {
  let index = todoList.findIndex((el) => el.id === num);
  
  console.log(index);
};

// create function to edit any item by order number
// the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value

//----------------INTRO PART---------------//

//printing command list
// for (const item of commandList) {
//   console.table(`${item["id"]}: ${item["text"]}`);
// }

//entering a command

for (let i = 0; i < 10; i++) {
    for (const item of commandList) {
        console.table(`${item["id"]}: ${item["text"]}`);
      }
    let input = +prompt("Enter a command number: ");

//-----------------MAIN PART------------------//

switch (input) {
  case 1: //show to do list
    for (const item of todoList) {
      console.table(`Task ${item["id"]}: ${item["text"]}`);
    }
    break;

  case 2: //delete any todo
    let deleteNum = +prompt("Enter the number of task you want to delete: ");
    removeTodo(deleteNum);
    break;

  case 3: //Update items as done
    let taskNum = +prompt("Which task you want to update? ");
    updateTodo(taskNum);
    break;

  case 4: //show pending todos //console log the tasks with done property false
    pendingTodo();
    break;

  case 5: //show done todos //done property true
    doneTodos();
    break;

  case 6: //adding new TODO item //Don’t allow adding empty items
    let taskInput = prompt("Enter a new task: ");
    if(taskInput === ""){
        console.log("Please enter some text");
    }else{
    insertTodo(taskInput);
    console.table(todoList);
    }
    break;

  case 7: //editing any task

    console.table(todoList);
    let taskEdit = +prompt("Enter the id of task you want to change: ");
    let taskText = prompt("Enter the new task: ");

    let editTodo = function (taskEdit, taskText) {
        let index = todoList.findIndex((el) => el.id === taskEdit);
        console.log(index);
        todoList[index].text = taskText;
      };

      editTodo(taskEdit,taskText);
      console.table(todoList);

  default:
    console.log("Enter a command number");
    break;
}

}

