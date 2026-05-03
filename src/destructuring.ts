//object destructuring
const user={
    id:1,
    name:{
        firstName:"abir",
        lastName:"arafat"
    },
    age:25,
    profession:"developer"
}
const {profession,name:{lastName}}=user;
console.log(profession,lastName);
//array destructuring
const arr:string[]=["abir","arafat","abir2"];
const [, ,third]=arr;
console.log(third);