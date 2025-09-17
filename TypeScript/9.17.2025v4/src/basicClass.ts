export class Human {
    private fName:string;
    private lName:string;
    private age:number;
    private isMarried:boolean;

    constructor(fName:string,lName:string,age:number,isMarried:boolean) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.isMarried = isMarried;
    }

 public getFullName = ():string => {
     return `Your name is ${this.fName} ${this.lName}`;
    }
}