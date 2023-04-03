import { Monstre } from "./monstre.class.js";

export class Squelette extends Monstre {
    #loot;

    static lootRange = 3;
    static linkToImage  = "../images/"; 
    static variousColors = 2;

    constructor(nom, degats, defense, health, target){
        let variousColor = Math.floor(Math.random() * (Squelette.variousColors - 0) + 0);
        let currentImage = Squelette.linkToImage + "skeleton" + variousColor + ".png";

        super(nom, degats, defense, health, currentImage, target);
        this.SetLootStats();
    }

    SetLootStats(){
        this.SetLoot = Math.floor(Math.random() * (Squelette.lootRange) + 1) == 1;
    }

    get GetLoot(){
        return this.#loot;
    }

    set SetLoot(loot){
        this.#loot = loot;
    }
}