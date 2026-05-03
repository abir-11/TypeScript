type User={
    id:number;
    name:{
        firstName:string;
        lastName:string;
    }
}
const user1:User={
    id:1,
    name:{
        firstName:"abir",
        lastName:"arafat"
    }
}
const user2:User={
    id:2,
    name:{
        firstName:"abir2",
        lastName:"arafat2"
    }
}
type Name=string;
const myName:Name="abir";
//type alias function
type Add=(num1:number,num2:number)=> number;

const add:Add=(num1,num2)=>num1+num2;
console.log(add(2,2));