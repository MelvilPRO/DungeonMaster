import { Monstre } from "./monstre.class.js";

export class Squelette extends Monstre {
    static maxDropRange = 3;
    static linkToImage  = "../images/"; 
    static variousColors = 2;

    constructor(nom, degats, defense, health, target){
        super(nom, degats, defense, health, "", target);
        let variousColor = Math.floor(Math.random() * (Squelette.variousColors - 0) + 0);
        super.SetImages = Squelette.linkToImage + "skeleton" + variousColor + ".png"
    }
}