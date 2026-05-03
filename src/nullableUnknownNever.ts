//nullable,unknown, never
//nullable type
const user=(input:string | null)=>{
    if(input){
        console.log(input);
    }
    else{
        console.log("No input provided");
    }
}
user("abir");
//user(null);

//unknown type
const apple=(input:unknown)=>{
    if(typeof input === "number"){
        const discountPrice=input*0.1;
        console.log(discountPrice);
    }
    else if(typeof input === "string"){
        const [discountPrice]=input.split(" ");
        const discount=Number(discountPrice)*0.1;
        console.log(discount);

    }
    else{
        console.log("invalid Input");
    }
}
apple(100);
apple("100 tk");
apple(null);
//gama.app 