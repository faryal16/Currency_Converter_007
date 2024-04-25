import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\t\n\tWelcome To MY Project!!\n\n\tCURRENCY CONVERTER!!\n\n"));
//define the list of currences and thier exchange rates
let exchange_Rate = {
    "USD": 1,
    "ERU": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PAK": 277.70, // pakistani rupees
    // add more carrencies and thier aexchange rate
};
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "From_Currency",
        type: "list",
        message: chalk.green("Select the currency to convert from:"),
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PAK"]
    },
    {
        name: "To_Currency",
        type: "list",
        message: chalk.green("Select the currency to convert into:"),
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PAK"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.red("Enter the amount to convert:")
    }
]);
//prefer currency conversion bt using formula
let from_amount = exchange_Rate[user_answer.From_Currency];
let to_amount = exchange_Rate[user_answer.To_Currency];
let amount = user_answer.amount;
//formula for conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// disply the converted amount
console.log(`Converted Amount =  ${chalk.yellow.bold(converted_amount.toFixed(2))}`);
console.log(chalk.rgb(255, 0, 5)("\nHere is YOUR CONVERTED AMOUNT!!\nTHANK YOU FOrwork with us\n"));
