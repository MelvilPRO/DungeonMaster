import { Monstre } from "./monstre.class.js";

export class Araignee extends Monstre {
    static maxDropRange = 5;
    static linkToImage  = "../images/"; 
    static variousColors = 3;

    constructor(nom, degats, defense, health, target){
        super(nom, degats, defense, health, "", target);
        let variousColor = Math.floor(Math.random() * (Araignee.variousColors - 0) + 0);
        super.SetImages = Araignee.linkToImage + "spider" + variousColor + ".png"
    }
}