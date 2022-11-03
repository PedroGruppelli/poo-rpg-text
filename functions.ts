import { Creator } from "./creator";
import { Stats } from "./stats";
import { Enemy } from "./enemy";
import { Directions } from "./locations";
import { Inventory } from "./inventory";
import { Util } from "./util";

const prompt = require('prompt-sync')();
const random = Math.random();
const write = prompt

export class Functions{
    
    public Stats : Stats;
    public Directions : Directions;
    public Inventory : Inventory;
    public Enemy : Enemy;
    public Util : Util;

    constructor(){
        this.Stats = new Stats;
        this.Directions =  new Directions;
        this.Inventory = new Inventory;
        this.Enemy = new Enemy;
        this.Util = new Util;

    }
    
    rest (){
        // * RECUPERA VIDA, MANA e STAMINA
        this.Stats.health = this.Stats.health + 10 //TODO BALANCEAR
        this.Stats.mana = this.Stats.mana + 10  //TODO BALANCEAR
        this.Stats.stamina = this.Stats.stamina + 10  //TODO BALANCEAR
        console.log("descancar ne que o cara nao e de ferro")
    }
    
    travel(){
        this.Util.map()

        let choice = write("Digite uma opção : ")

        switch (choice) {

            case "North":
                console.log(this.Enemy.babyGruppelli())                
                break;
            case "South":
                console.log(this.Enemy.slime())
                break;
            default:
                console.log("VOce caiu no vacuo do espaco nada mais existe morte ao capitalismo, vacas dominam o mundo")
                break
        }

      /*  this.Directions.norte = ''
        this.Directions.sul = ''
        this.Directions.leste = ''
        this.Directions.oeste = ''
         // * FAZ a travel mas nao sei oq isso significa
        console.log("nao importa se eu for pra la <- ou se eu for pra la -> o que eu escolher vai dar errado")
        console.log("  0=|====>    ")*/
    }

    inventory (){
        // * MOSTRA AS POÇÕES DO INVENTARIO
        console.log('Poções de Vida: ' + this.Inventory.poteH);
        console.log('Poções de Mana: ' + this.Inventory.poteM);
    }        

    explore (){
        // farming/encontrar monstros
        console.log('DORA EXPLORADORA ACHOU UMA CAMISINHA USADA... NÃO BOTA NA BOCA DORA QUE ISSO')
        
    }

}