import { Monstre } from "./monstre.class.js";

export class Boss extends Monstre {
    #loot;

    static lootRange = 2;
    static linkToImage  = "../images/"; 
    static variousColors = 5;

    constructor(nom, degats, defense, health, target){
        let variousColor = Math.floor(Math.random() * (Boss.variousColors - 0) + 0);
        let currentImage = Boss.linkToImage + "boss" + variousColor + ".png";

        super(nom, degats, defense, health, currentImage, target);
        this.SetLootStats();
    }

    SetLootStats(){
        this.SetLoot = Math.floor(Math.random() * (Boss.lootRange) + 1) == 1;
    }

    get GetLoot(){
        return this.#loot;
    }

    set SetLoot(loot){
        this.#loot = loot;
    }
}