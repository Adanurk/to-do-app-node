const inquirer = require("inquirer");

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
    let found = todoList.find((element)=> element.id === x);
    found.done = true;
    return todoList;
};
  
//editing tasks
let editTodo = function (taskEdit, taskText) {
    let index = todoList.findIndex((el) => el.id === taskEdit);
      console.log(index);
      todoList[index].text = taskText;
};

//entering a command
console.table("todoList");

inquirer.prompt(["Enter a command number: "])
        .then((answers)=>{
            

        })