// access >> modify

class person {
    public readonly userId: number;
    public name: string;
    protected bankBlance: number;
    constructor(userId: number, name: string, bankBlance: number) {
        this.userId = userId;
        this.name = name;
        this.bankBlance = bankBlance;
    }
    addbankBalance(blance: number) {
        return this.bankBlance = this.bankBlance + blance;
    }
}
class student extends person {
    loan() {
        this.bankBlance = this.bankBlance;
    }
}
const addBalance = new person(11, "Abir", 20);
console.log(addBalance.name, addBalance.userId, addBalance.addbankBalance(100));

