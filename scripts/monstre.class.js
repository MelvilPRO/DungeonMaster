import { Creature } from './creature.class.js';

export class Monstre extends Creature {
    #className;

    constructor(nom, degats, defense, health, images, target){
        super(nom, degats, defense, health, images, target);
        this.#className = "Monstre";
    };

    get GetClassName(){
        return this.#className;
    }
};