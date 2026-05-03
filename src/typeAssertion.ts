const price=(input:string|number):number|string|undefined=>{
    if(typeof input === "number"){
        const discountPrice=input*0.1;
        return discountPrice;
    }
    else if(typeof input === "string"){
        const [discountPrice]=input.split(' ');
        const discount=Number(discountPrice)*0.1;
        return discount;
    }
    else{
        return "invalid Input";
    }
}
const result1=price(100) as number;
const result2=price("100 tk") as string;
console.log(result1);
console.log(result2);

type errorMessage={
    message:string;
}

try{

}catch(error){
    console.log((error as errorMessage).message);
}