export class Hero {
    static damage = 3;
    static minForce = 3;
    static maxForce = 10;
    static minDef = 1;
    static maxDef = 5;
    static maxLife = 100;
    static maxPotions = 10;

    #nom;
    #prenom;
    #force;
    #degats;
    #defense;
    #life;
    #bagPotions;
    #bagWeapons;

    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.force = Math.round(Math.random() * (Hero.maxForce - Hero.minForce) + Hero.minForce);
        this.defense = Math.round(Math.random() * (Hero.maxDef - Hero.minDef) + Hero.minDef);
        this.degats = this.force * Hero.damage;
        this.life = 100;
        this.bagPotions = 0;
        this.bagWeapons = [];
    }

    attack(cible){
        cible.life = (cible.life + cible.defense) - this.degats;
        return cible.life <= 0;
    }

    getStuff(equipement){
        switch(equipement){
            case 'potions':
                this.bagPotions++;
                break;
            
            case 'weapon':
                this.bagWeapons.push(equipement);
                this.degats += 4;
                break;

            default:
                console.log("Error: Unknown Stuff");
                break;
        }
    }

    usePotions() {
        this.bagPotions--;
        this.life += 10;
    }

    get nom(){
        return this.#nom;
    }

    set nom(tmp){
        this.#nom = tmp;
    }

    get prenom(){
        return this.#prenom;
    }

    set prenom(tmp){
        this.#prenom = tmp;
    }

    get force(){
        return this.#force;
    }

    set force(tmp){
        this.#force = tmp;
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
        if (tmp <= Hero.maxLife) {
            this.#life = tmp;
        }
    }

    get bagPotions(){
        return this.#bagPotions;
    }

    set bagPotions(tmp){
        if (tmp <= Hero.maxPotions && tmp >= 0) {
            this.#bagPotions = tmp;
        }
    }

    get bagWeapons(){
        return this.#bagWeapons;
    }

    set bagWeapons(tmp){
        this.#bagWeapons = tmp;
    }
}