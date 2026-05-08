//type guard

// in typeof
type Alphaneumaric =number | string ;

const add =(num1:Alphaneumaric,num2:Alphaneumaric)=>{
     if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
     }
     else{
        return num1.toString()+num2.toString();
     }
}
console.log(add (1,"1"));
console.log(add (1,1));
console.log(add ("1","1"));


//in guard

type normal={
    name:string
}
type Admin={
    name:string;
    role:string;
}

const getUserInfo=(user:normal | Admin)=>{
    if("role" in user){
        console.log(`${user.name} is the owner of the website and his role : ${user.role}`)
    }
    else{
        console.log(`${user.name} is the only normal user`);
    }
}

getUserInfo({name:'abir',role:"admin"})