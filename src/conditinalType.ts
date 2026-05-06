//Conditional type : je type condition er upore nirvor kore 

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type vehicle={
    bike:string,
    car:string
}
type checkVehicle<T>=T extends keyof vehicle?true:false;

type result=checkVehicle<"bike">