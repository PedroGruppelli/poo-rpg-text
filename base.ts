import { Creator } from "./creator";
import { Stats } from "./stats";

const random = Math.random();

const prompt = require('prompt-sync')();
const write = prompt

export class Character {
   private Creator: Creator;
   private Stats :  Stats;
     
     constructor(){
        this.Creator = new Creator;
        this.Stats = new Stats;
     }   
}
