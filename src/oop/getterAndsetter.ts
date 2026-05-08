// getter and  setter 

class BankAccount{
    public UserId:number;
    public name:string;
    protected userBalance:number;

    constructor(UserId:number,name:string,userBalance:number){
        this.UserId=UserId;
        this.name=name;
        this.userBalance=userBalance;
    }

    set setBalance(amount:number){
        this.userBalance=this.userBalance + amount;
    }

    get getBalance(){
        return this.userBalance;
    }
}

const abirAccount=new BankAccount(111,"abir",30);

abirAccount.setBalance=100;
//abirAccount.getBalance;
console.log(abirAccount.getBalance);