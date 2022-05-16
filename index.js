const prompt = require("prompt-sync")({sigint:true});

//npm i inquirer
//bununla user secim yapabiliyor

//prompt-sync
//npm i prompt sync

//show todo list
//delete any todo
//update any todo
//show pending todos
//show done todos


//our variables

let todoList = [
    {id:1, text:"jogging", done:false}, 
    {id:2, text:"cleaning",done:false},
    {id:3, text:"live code", done:false}
];

let commandList = [
    {id:1, text:"show to do list"}, 
    {id:2, text:"delete any todo"},
    {id:3, text:"update any todo"}, 
    {id:4, text:"show pending todos"}, 
    {id:4, text:"show done todos"}
];

//enter a command

let input = prompt("Enter a command: ");
console.log(input);


switch (input) {
    case "show to do list":
        console.log(todoList);
        break
    case "delete any todo":


    break
    case "update any todo":

    break
    case "show pending todos":

    break
    case "show done todos":

    break
}
