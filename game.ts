//import { character } from "./Characters";
import { Creator } from "./creator";
import { Enemy } from "./enemy";
import { Functions } from "./functions";


const random = Math.random();


const prompt = require('prompt-sync')();
const write = prompt

console.log("Crie seu personagem");
let call: Creator = new Creator();
let callOutCombat = new Functions();
call.characterCreator()

// ! while (true) 

    
    console.log("0--Mostrar stats");
    console.log("1--Descançar");
    console.log("2--Viajar");
    console.log("3--Inventario");
    console.log("4--Explorar");

    let choice: number = +write("Digite uma opção : ")

    switch (choice) {

        case 0:
            console.table(call)
            break;
        case 1:
            callOutCombat.rest()
            break;
        case 2:
            callOutCombat.travel()
            break;
        case 3:
            callOutCombat.inventory()
            break;
        case 4:
            callOutCombat.explore()
            break;
        default:
            console.log("Opção Não existe. Escolhe direito p*ra")
            break
    }