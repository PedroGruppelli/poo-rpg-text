import { Creator } from "./creator";
import { Enemy } from "./enemy";
import { Functions } from "./functions";

const random = Math.random();
const prompt = require('prompt-sync')();
const write = prompt


export class Util {

    map(){
        console.log("Para onde ir?")
        console.log('')
        console.log("################")
        console.log("####   N  ######")
        console.log("# O <- . -> E ##")
        console.log("###    S     ###")
        console.log("################")
    }

}