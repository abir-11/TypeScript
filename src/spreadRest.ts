//spread operator
const arr1 = [1, 2, 3];
const arr2=[...arr1, 4, 5, 6];
const arr3=[7,8,9];
arr2.push(...arr3);
console.log(arr2);

const user ={
    name:"abir",
    age:25,
    profession:"developer"
}

const othersInfo={
    hobby:'outing',
    favouriteFood:"black"
}
const userInfo={...user,...othersInfo};
console.log(userInfo);

//rest operator
const sentInvitation=(...friends:string[])=>{
   
    console.log(friends);
};

sentInvitation("abir","arafat","abir2");

// output [ 'abir', 'arafat', 'abir2' ]