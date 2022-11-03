import { Stats } from "./stats";

const random = Math.random();
const prompt = require('prompt-sync')();
const write = prompt

export class Creator {

    private Stats: Stats;

    region: string = ""
    race: string = ""
    nickName: string = write("Digite o seu Apelido: ")
    class: string = ""
    newclass: string = ""

    constructor() {
        this.Stats = new Stats;

    }


    characterCreator() {
        console.log("Escolha sua região");
        console.log("1 -- Floresta = Região habitada por elfos e humanos");
        console.log("2 -- Cemiterio = Região habitada por flagelados e vampiros");

        this.region = write("Escolha sua região: ")
        if (this.region == "1") {
            this.race = write("Escolha sua raça elfo ou humano ? ")
        }
        else if (this.region == "2") {
            this.race = write("Escolha sua raça flagelado ou vampiro ? ")
        } else {
            "Digite a região corretamente"

        }
        if (this.region == "1") {

            if (this.race == "elfo") {
                this.Stats.health = 1
                this.Stats.stamina = 1
                this.Stats.mana = 1
                this.Stats.strength = 1
                this.Stats.wisdom = 1
                this.Stats.armor = 1
                this.Stats.skill = 1
                this.Stats.nivel = 0
            

            } else if (this.race == "humano") {
                this.Stats.health = 2
                this.Stats.stamina = 2
                this.Stats.mana = 2
                this.Stats.strength = 2
                this.Stats.wisdom = 2
                this.Stats.armor = 2
                this.Stats.skill = 2
                this.Stats.nivel = 0
            }

        }

        if (this.region == "2") {
            if (this.race == "Flagelado") {
                this.Stats.health = 3
                this.Stats.stamina = 3
                this.Stats.mana = 3
                this.Stats.strength = 3
                this.Stats.wisdom = 3
                this.Stats.armor = 3
                this.Stats.skill = 3
                this.Stats.nivel = 0
            } else if (this.race == "vampiro") {
                this.Stats.health = 4
                this.Stats.stamina = 4
                this.Stats.mana = 4
                this.Stats.strength = 4
                this.Stats.wisdom = 4
                this.Stats.armor = 4
                this.Stats.skill = 4
                this.Stats.nivel = 0
            }
        }


        console.log("Escolha sua classe : ")
        console.log('1 -- Arqueiro');
        console.log('2 -- Guerreiro');
        console.log('3 -- Mago');
        console.log('4 -- Clerigo');
        this.class = write("Escolha sua classe : ")


        if (this.class == '1' || this.class == 'Arqueiro') {
            this.newclass = 'Arqueiro'
            this.Stats.skill = this.Stats.skill + 5
            this.Stats.stamina = this.Stats.stamina + 5
        }
        else if (this.class == '2' || this.class == 'Guerreiro') {
            this.newclass = 'Guerreiro'
            this.Stats.strength = this.Stats.strength + 5
            this.Stats.health = this.Stats.health + 5
            this.Stats.armor = this.Stats.armor + 5

        }
        else if (this.class == '3' || this.class == 'Mago') {
            this.newclass = 'Mago'
            this.Stats.mana = this.Stats.mana + 5
            this.Stats.wisdom = this.Stats.wisdom + 5
        }
        else if (this.class == '4' || this.class == 'Clerigo') {
            this.newclass = 'Clerigo'
            this.Stats.mana = this.Stats.mana + 5
            this.Stats.wisdom = this.Stats.wisdom + 5
            this.Stats.armor = this.Stats.armor + 5
        }
        else {
            console.log("Classe inexistente favor digitar novamente");
            return
        }

        console.warn(`Welcome to the world of Falkreath, you're a prisioner and you've been arrested on a litle village, but on the middle of
    confusion you could scape and now you are on the woods, more information coming soon... `);


    }
}
