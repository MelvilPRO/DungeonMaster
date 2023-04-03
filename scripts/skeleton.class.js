import { Monster } from "./monster.class.js";

export class Skeleton extends Monster {
    #loot;

    static lootRange = 10;
    static linkToImage = "../images/skeleton/";
    static textureName = "skeleton";
    static variousColors = 2;

    constructor(nom, degats, defense, life, target){
        let variousColor = Math.floor(Math.random() * (Skeleton.variousColors - 0) + 0);
        let currentImage = Skeleton.linkToImage + Skeleton.textureName + variousColor + ".png";

        super(nom, degats, defense, life, currentImage, target);

        let lootStatistics = Math.floor(Math.random() * (Skeleton.lootRange) + 1) == 1;
        this.loot = lootStatistics;
    }

    get loot(){
        return this.#loot;
    }

    set loot(tmp){
        this.#loot = tmp;
    }
}