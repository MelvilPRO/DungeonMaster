import { Monster } from "./monster.class.js";

export class Boss extends Monster {
    #loot;

    static lootRange = 3;
    static linkToImage = "../images/boss/"; 
    static textureName = "boss";
    static variousColors = 5;

    constructor(nom, degats, defense, life, target){
        let variousColor = Math.floor(Math.random() * (Boss.variousColors - 0) + 0);
        let currentImage = Boss.linkToImage + Boss.textureName + variousColor + ".png";

        super(nom, degats, defense, life, currentImage, target);

        let lootStatistics = Math.floor(Math.random() * (Boss.lootRange) + 1) == 1;
        this.loot = lootStatistics;
    }

    get loot(){
        return this.#loot;
    }

    set loot(tmp){
        this.#loot = tmp;
    }
}