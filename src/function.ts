//function
//arrow function ,normal funcion
function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(2,2));
const addArrow=(
num1:number,num2:number):number=>
num1+num2;

console.log(addArrow(2,2));

//object =>function => method
const poorUser={
    name:"abir",
    balance:0,
    addBalance(value:number):number{
        return this.balance+=value;

    }
}
console.log(poorUser.addBalance(100));

//call back function
const arr:number[]=[1,2,3];
const newArr=arr.map((num:number):number=>num*num);
console.log(newArr);