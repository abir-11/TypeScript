// oop : instance of type guard type narrowing
class person{
    constructor(public name:string){

    }
    getSleep(hour:number){
        console.log(`${this.name} ${hour} ghumai`);
    }
}

class student extends person{
    constructor(name:string){
        super(name);
    }
    takeStudent(hour1:number){
        console.log(`${this.name} ${hour1} hours class kortese`);
    }
}
class teacher extends person{
    constructor(name:string){
        super(name);
    }
    takeTeacher(hour2:number){
        console.log(`${this.name} ${hour2} hours class nitese`);
    }
}

const isStudent=(user:person)=>{
    return user instanceof student;
}

const isTeacher=(user:person)=>{
    return user instanceof teacher;
}

const getUserInfo=(user:person)=>{
    if(isStudent(user)){
       user.takeStudent(12);
    }
    else if(isTeacher(user)){
        user.takeTeacher(4)
    }
    else{
        user.getSleep(15)
    }
}

const student1=new student("abir");
const teacher1=new teacher("Arafat");

getUserInfo(student1);