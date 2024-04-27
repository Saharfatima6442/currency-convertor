#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57
}

let userAnswer = await inquirer.prompt([{
    name: 'from',
    message: 'Enter from currency',
    type: 'list',
    choices: ['USD', 'PKR', 'EUR', 'GBP', 'INR']
},
{
    name: 'to',
    message: 'Enter to Currency',
    type: 'list',
    choices: ['USD', 'PKR', 'EUR', 'GBP', 'INR']
},
{
    name: 'amount',
    message: 'Enter your Amount',
    type: 'number'
}
]
)

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);