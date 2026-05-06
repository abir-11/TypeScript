//mapped types
//map

const arrayOfNumber:number[]=[1,2,3];

const arrayOfString:string[]=arrayOfNumber.map((num)=>num.toString());
console.log(arrayOfString);

type arrOfNumber={
    height:number,
    width:number
}

type Area<T>={
    [key in keyof T]:string;
}

const area1:Area<{height:string,
    width:string
}>={
  height:"50",
  width:"40"
};

interface user {
    name:string;
    age:number;
    email:string;
}

//ekhon ami ei user r sob gula value boolean hisebe dekte chai ekhane amr mapped type use korte pari
type booleanUser={
    [k in keyof user]:boolean
}

//generics er sathe name use

type toBoolean<T>={
    [k in keyof T]:boolean;
};

type product ={id:number;title:string;};

type BooleanProduct = toBoolean<product>;

// Indexed Access (T[K]) diye asol Type dhore rakha

type MakeOptional <T> ={
    [k in keyof T]?:T[k];
}

interface car{
    brand:string;
    year:number;
}

type OptionalCar=MakeOptional<car>
