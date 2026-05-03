// object,array,function
// ts-tuple
// Tuple means:

// “Fixed structure array”
let bazarList:string[]=["rice","dal","eggs"];
let mixedList:(string|number)[]=["abir",1234];
//mixedList.push(true);->error

//object,literal,$Optional types
//reference type :object
const users:{
    organization:"programming hero"; // jodi organization ke kokhono cng na korte chai tahole string er jagai amra value hisebe assign korte pari ; value => type;
    // type : literal type 
    firstName:string;
    middleName?:string;//optional type (? mark)
    lastName:string;
    isMarried:boolean
}={
    organization:"programming hero",
    firstName:"arafat",
 
    lastName:"abir",
    isMarried:true
}
