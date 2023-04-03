import { Monstre } from "./monstre.class.js";

export class Boss extends Monstre {
    static maxDropRange = 2;
    static linkToImage  = "../images/"; 
    static variousColors = 5;

    constructor(nom, degats, defense, health, target){
        let variousColor = Math.floor(Math.random() * (Boss.variousColors - 0) + 0);
        let currentImage = Boss.linkToImage + "spider" + variousColor + ".png";

        super(nom, degats, defense, health, currentImage, target);
    }
}