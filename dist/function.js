"use strict";
//function
//arrow function ,normal funcion
// function add(num1:number,num2:number):number{
//     return num1+num2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// add(2,2);
// const addArrow=(
// num1:number,num2:number):number=>
// num1+num2;
// addArrow(2,2);
//object =>function => method
const poorUser = {
    name: "abir",
    balance: 0,
    addBalance(value) {
        return this.balance += value;
    }
};
console.log(poorUser.addBalance(100));
//# sourceMappingURL=function.js.map