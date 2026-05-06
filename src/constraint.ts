//constraint : Strict rules deya
type Student = {
    id: number;
    name: string;
    dateofBirth: string;
    class: number
}


const StudentData = <T extends Student>(studentInfo: T) => {
    return {
        ...studentInfo
    }
}

const student1 = {
    id: 1,
    name: "Abir",
    dateofBirth: "26-09-2003",
    class: 12,
    hasPen: true

}
// const student2 = {
//     id: 1,
//     name: "Abir",

//     hasPen: true

// }
const result1 = StudentData(student1);
//const result = StudentData(student2);
console.log(result1);

//keyof constraint with Generics
//keyof : type operator

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const myUser = {
    id: 1,
    name: "Rahim",
    email: "rahim@gmail.com"
}

let userName = getProperty(myUser, "email");
console.log(userName);

//error
//let userAge = getProperty(myUser, "age")

