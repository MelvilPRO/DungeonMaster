export class Monster {
    #nom;
    #degats;
    #defense;
    #life;
    #image;
    #target;

    constructor(nom, degats, defense, life, image, target){
        this.nom = nom;
        this.degats = degats;
        this.defense = defense;
        this.life = life;
        this.image = image;
        this.target = target;
    }

    attack(cible){
        if (cible.defense - this.degats < 0){
            cible.life = cible.life - (this.degats - cible.defense);
        }

        return cible.life <= 0;
    }

    addToDom(){

    }

    removeFromDom(){

    }

    leaveReward(){
        
    }

    get nom(){
        return this.#nom;
    }

    set nom(tmp){
        this.#nom = tmp;
    }

    get degats(){
        return this.#degats;
    }

    set degats(tmp){
        this.#degats = tmp;
    }

    get defense(){
        return this.#defense;
    }

    set defense(tmp){
        this.#defense = tmp;
    }

    get life(){
        return this.#life;
    }

    set life(tmp){
        this.#life = tmp;
    }

    get image(){
        return this.#image;
    }

    set image(tmp){
        this.#image = tmp;
    }

    get target(){
        return this.#target;
    }

    set target(tmp){
        this.#target = tmp;
    }
}