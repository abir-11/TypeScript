//dynamically generalize
type generalize<T>=Array<T>;

const numbers:generalize<number>=[1,2,3,4];
const strings:generalize<string>=["abir","arafat","abir2"];
const userList:generalize<{
    name:string;
    age:number;
}>=[
    {
        name:"abir",
        age:25
    },
    {
        name:"arafat",
        age:25
    }
]

interface ApiResponse<T>{
    statusCode:number;
    message:string;
    data:T;//dynamic data type
}
interface Review{
    comment:string;
    rating:number;

}
const reviewResponse:ApiResponse<Review>={
    statusCode:200,
    message:"review fetched successfully",
    data:{
        comment:"Thank you for your review",
        rating:5
    }
}
console.log(reviewResponse);
//user interface
interface User{
    name:string,
    age:number;
}
const userResponse:ApiResponse<User>={
    statusCode:200,
    message:"User fetched successfully",
    data:{
        name:"Abir",
        age:23
    }
}
console.log(userResponse);