const inquirer = require("inquirer");

//----------VARIABLES--------------//

let todoList = [
  { number: 1, text: "jogging", done: false },
  { number: 2, text: "cleaning", done: true },
  { number: 3, text: "live code", done: false },
];

//----------FUNCTIONS-------------//

// Add item

let insertTodo = (taskInput) => {
  todoList.push({ number: todoList.length + 1, text: taskInput, done: false });
  pendingTodo();
};

// Update Items

let updateTodo = (taskNum) => {
  //   let taskNum = +prompt("Which task number you want to update? ");
  let found = todoList.find((element) => element.number === taskNum);
  found.done = true;
  doneTodos();
};

//Remove Item
let removeTodo = (deleteNum) => {
  //   let deleteNum = +prompt("Enter the number of task you want to delete: ");
  todoList = todoList.filter((element) => element.number !== deleteNum);
  if (!todoList.length) {
    console.log(`To do list is empty!`);

    // return;
  }
  console.table(todoList);
};

//Edit Item
let editTodo = (taskEdit, taskText) => {
  todoList.find((el) => el.number === taskEdit).text = taskText;
  console.table(todoList);
};

//filter Items

//create function to display all pending todos
let pendingTodo = () => {
  let stillTodo = todoList.filter((element) => element["done"] === false);
  console.table(stillTodo);
};

//create function to display all done todos
let doneTodos = () => {
  let doneTodo = todoList.filter((element) => element["done"] === true);
  console.table(doneTodo);
};

async function main() {
  const answer = await inquirer.prompt({
    name: "Options",
    message: "Select any options:",
    choices: [
      "Show Todo's List",
      "Delete any TODO",
      "Update items as done",
      "Show number of tasks left to do",
      "Show done TODO's tasks",
      "Add new TODO task",
      "Edit any task",
      "Exit ToDO app.",
    ],
    type: "list",
  });
  console.log(answer);

  switch (answer.Options) {
    case "Show Todo's List": //show to do list
      if (!todoList.length) {
        console.log(`To do list is empty!`);
        break;
      }
      console.table(todoList);

      break;

    case "Delete any TODO": //delete any todo
      console.table(todoList);
      const index = await inquirer.prompt({
        name: "a",
        type: "number",
        message: "Enter the number of task you want to delete: ",
      });
      removeTodo(index.a);

      break;

    case "Update items as done": //Update items as done
      console.table(todoList);
      const update = await inquirer.prompt({
        name: "a",
        type: "number",
        message: "Which task number you want to update? ",
      });
      updateTodo(update.a);
      break;

    case "Show number of tasks left to do": //show pending todos //console log the tasks with done property false
      pendingTodo();
      break;

    case "Show done TODO's tasks": //show done todos //done property true
      doneTodos();
      break;

    case "Add new TODO task": //adding new TODO item //Don't allow adding empty items
    console.table(todoList);
    const newOne = await inquirer.prompt({
        name: "b",
        type: "string",
        message: "Enter a new task: ",
      });
    insertTodo(newOne.b);
      break;

    case "Edit any task": //editing any task
      console.table(todoList);
      const taskEdit = await inquirer.prompt({
        name: "c",
        type: "number",
        message: "Enter the number of task you want to change: ",
      });
      const taskText = await inquirer.prompt({
        name: "d",
        type: "string",
        message: "Change the task: ",
      });
      editTodo(taskEdit.c, taskText.d);
      break;
    default:

      return;
  }
  main();
}

main();