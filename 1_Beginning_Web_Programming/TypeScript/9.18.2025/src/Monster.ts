export class Monster {
    firstName: string;
    lastName: string;
    age: number;
    type: "Human" | "Undead";
    moreInfo: string;

    constructor(firstName: string, lastName: string, age: number, type: "Human" | "Undead", moreInfo: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.type = type;
        this.moreInfo = moreInfo;
    }

}

export type MonsterCollection = [Monster, number, string];

export function getFirst<T>(items: T[]): T { return items[0];}