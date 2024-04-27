#!/usr/bin/env

import inquirer from "inquirer";
    let keepgoing: boolean = true;
    let TODO: string[] = [];
    while (keepgoing) {
        let condition: boolean = true;
        let myList: { firstQuestion: string } = await inquirer.prompt({
            name: "firstQuestion",
            type: "list",
            message: "What would you like to do in Todos: ",
            choices: ["Add Item", "Delete", "Exit"]
        });

        if (myList.firstQuestion === "Add Item") {
            while (condition) {
                let task4Todo = await inquirer.prompt([
                    {
                        name: "Question1",
                        type: "input",
                        message: "Add your Task: "
                    },
                    {
                        name: "Question2",
                        type: "confirm",
                        message: "Do you want to add more: ",
                        default: false
                    }
                ]);

                let p: string = task4Todo.Question1;
                TODO.push(p);
                console.log(TODO);
                condition = task4Todo.Question2;
            }
        } else if (myList.firstQuestion === "Delete") {
            while (condition) {
                let task4todo = await inquirer.prompt([
                    {
                        name: "Question1",
                        type: "input",
                        message: "Enter the Task to Delete: "
                    },
                    {
                        name: "Question2",
                        type: "confirm",
                        message: "Do you want to Delete more: ",
                        default: false
                    }
                ]);

                let task1: string = (task4todo.Question1 as string).toLowerCase();
                let lowerCaseList: string[] = TODO.map(item => item.toLowerCase());
                let found: boolean = false;

                for (let i = 0; i < TODO.length; i++) {
                    if (task1 === lowerCaseList[i]) {
                        TODO.splice(i, 1);
                        found = true;
                        break; 
                    }
                }

                if (!found) {
                    console.log("Item not Found!");
                }
                condition = task4todo.Question2;
            }
            console.log(TODO);
        } else if (myList.firstQuestion === "Exit") {
            break;
        } else {
            console.log("Invalid Input.!");
        }
    }

