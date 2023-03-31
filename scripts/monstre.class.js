export class Monstre {
    // Attributs des Créatures communes
    #nom;       // STR
    #degats;    // INT
    #defense;   // INT
    #health;    // INT
    #images;    // STR_PATH
    #target;    // CLASS INSTANCE MONSTRE/HEROS

    // Variables statiques utiles
    static maxHealth  = 100;

    // Constructeur
    constructor(nom, degats, defense, health, images, target){
        this.Init(nom, degats, defense, health, images, target);
    };

    // Méthode Init appelée par le constructeur
    Init(nom, degats, defense, health, images, target){
        this.SetNom = nom;
        this.SetDegats = degats;
        this.SetDefense = defense;
        this.SetHealth = health;
        this.SetImages = images;
        this.SetTarget = target;
    }

    // Méthode qui peut être appelée pour attaquer une cible
    // Baisse les HPs de la cible en faisant : HPS + DEF - DEGATS;
    // Renvoie true ou false si sa cible est morte
    Attaque(cible){
        if (cible.GetHealth > 0){
            let HPS = cible.GetHealth;
            let DEF = cible.GetDefense;
            HPS = HPS + DEF - this.#degats;
            cible.SetHealth = HPS;
            console.log("La cible: " + cible.GetNom + " s'est faite attaquée, elle a maintenant " + HPS + " points de vie.");
        }
        if (cible.GetHealth <= 0){
            console.log("La cible attaquée est morte");
            return true;
        }

        return false;
    }

    AjouterDom(){

    }

    RetirerDom(){

    }

    LacherEquipement(nomEquipement){

    }

    get GetNom(){
        return this.#nom;
    }

    set SetNom(nom){
        this.#nom = nom;
    }

    get GetDegats(){
        return this.#degats;
    }

    set SetDegats(degats){
        this.#degats = degats;
    }

    get GetDefense(){
        return this.#defense;
    }

    set SetDefense(defense){
        this.#defense = defense;
    }

    get GetHealth(){
        return this.#health;
    }

    set SetHealth(tmp){
        if (tmp <= 0){
            this.#health = 0;
            console.log("Le monstre: " + this.#nom + " est décédée!");
        } else if (tmp > Monstre.maxHealth){
            this.#health = Monstre.maxHealth;
            console.log("Les points de vie ne peuvent exceder: " + Monstre.maxHealth + " le monstre a maintenant: " + Monstre.maxHealth + " points de vie");
        } else {
            this.#health = tmp;
        }
    }

    get GetImages(){
        return this.#images;
    }

    set SetImages(images){
        this.#images = images;
    }

    get GetTarget(){
        return this.#target;
    }

    set SetTarget(target){
        this.#target = target;
    }
};