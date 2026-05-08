class person {
    constructor(
        public name: string,
        public age: number,
        public address: string
    ) { }
    getSleep(hour: number) {
        console.log(`${this.name} ${hour} Ghonta ghumai`);
    }
}

class student extends person {
    rollNumber: number;
    constructor(name: string, age: number, address: string, rollNumber: number) {
        super(name, age, address);
        this.rollNumber = rollNumber;
    }
}
const student1 = new student('abir', 45, "Dhaka", 23);
const student2 = new student('abir1', 451, "Dhaka1", 231);

class teacher extends person {
    designation: string;
    constructor(name: string,
        age: number,
        address: string,
        designation: string
    ) {
        super(name, age, address)
        this.designation = designation;
    }

}
const teacher1= new teacher ("Arafat",25,"Dhaka","Confirm")
console.log(teacher1)
console.log(student1);
console.log(student2);