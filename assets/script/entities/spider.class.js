import { Monster } from "./monster.class.js";

export class Spider extends Monster {
    #loot;

    static lootRange = 5;
    static linkToImage = "../images/spider/"; 
    static textureName = "spider";
    static variousColors = 3;

    constructor(nom, degats, defense, life, target){
        let variousColor = Math.floor(Math.random() * (Spider.variousColors - 0) + 0);
        let currentImage = Spider.linkToImage + Spider.textureName + variousColor + ".png";
        
        super(nom, degats, defense, life, currentImage, target);

        let lootStatistics = Math.floor(Math.random() * (Spider.lootRange) + 1) == 1;
        this.loot = lootStatistics;
    }

    get loot(){
        return this.#loot;
    }

    set loot(tmp){
        this.#loot = tmp;
    }
}