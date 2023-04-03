import { Monstre } from "./monstre.class.js";

export class Araignee extends Monstre {
    #loot;

    static lootRange = 5;
    static linkToImage  = "../images/"; 
    static variousColors = 3;

    constructor(nom, degats, defense, health, target){
        let variousColor = Math.floor(Math.random() * (Araignee.variousColors - 0) + 0);
        let currentImage = Araignee.linkToImage + "spider" + variousColor + ".png";

        super(nom, degats, defense, health, currentImage, target);
        this.SetLootStats();
    }

    SetLootStats(){
        this.SetLoot = Math.floor(Math.random() * (Araignee.lootRange) + 1) == 1;
    }

    get GetLoot(){
        return this.#loot;
    }

    set SetLoot(loot){
        this.#loot = loot;
    }
}