//static

class Counter{
    static Count:number=20;

    increment(){
        return Counter.Count=Counter.Count +1;
    }
   static decrement(){
        return Counter.Count=Counter.Count-1;
    }

}

const increment1=new Counter();

//console.log(increment1.increment());
//console.log(increment1.increment());
//console.log(increment1.increment());
console.log(Counter.decrement());