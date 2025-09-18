import {getFirst, Monster, MonsterCollection} from "./Monster";


let monster1: Monster = new Monster("Cody", "Johnson", 33, "Human", "TEST");
let monster2: Monster = new Monster("Luke", "Johnson", 2, "Undead", "TEST");

let monsterData: MonsterCollection = [monster1, 99, "Collection String"];

let monsters: Monster[] = [monster1, monster2];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

getFirst<number>(numbers);
getFirst<Monster>(monsters);