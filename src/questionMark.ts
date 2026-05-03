// ? : ternary operator : decision making
// ?? : nullish coalesscing operator
//?. optional chaining operator
const num1=(num:number)=>{
    return num>0 ?"positive":"negative";
}
console.log(num1(2));
//nullish coalessing -> it work to undefined and null value
const theam=undefined;
const selectedTheam=theam ?? "Dark theam";
console.log(selectedTheam);

//optional chaining operator
type user={
    name:string;
    address:{
        city?:string;
    }

}
const user1:user={
    name:"name1",
    address:{
        
    }

}
const address=user1?.address.city;
console.log(address);