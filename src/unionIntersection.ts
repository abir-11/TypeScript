// union |

type userRole="admin" | "user" ;
const getdashborad=(role:userRole)=>{
    if(role==="admin"){
        return "Admin dashboard";
    }
    else if(role==="user"){
        return "User Dashborad";
    }
    else{
        return "Gust Dashborad";
    }
}
console.log(getdashborad("admin"));

// intersection &
type employee={
    id:number;
    name:string;
    phoneNo:string;
};
type manager={
    desigation:string;
    teamSize:number;

};

type EmployeeManager=employee & manager;
const abir:EmployeeManager={
 id:1,
 name:"abir",
 phoneNo:"01306979918",
 desigation:"manager",
 teamSize:10
}
console.log(abir);