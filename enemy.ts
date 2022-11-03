import { Stats } from "./stats";

const random = Math.random();

export class Enemy{
    private Stats : Stats;
    
    constructor(){
        this.Stats = new Stats
    }

    babyGruppelli(){
        console.log("Voce encontrou um babyGruppelli");

        this.Stats.health = 10
        this.Stats.armor = 5
        this.Stats.strength = 5
        console.log(this.Stats.health,this.Stats.armor,this.Stats.strength);
        
    }
    
    sapucay(){
        this.Stats.health = 7
        this.Stats.armor = 4
        this.Stats.strength = 3
    }

    slime(){
        this.Stats.health = 2
        this.Stats.armor = 2
        this.Stats.strength = 1
        console.log(this.Stats.health);
        
    }


}
