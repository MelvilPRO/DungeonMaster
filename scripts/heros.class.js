export class Heros {
    // Attributs du Heros
    #nom;       // STR
    #prenom;    // STR
    #force;     // INT
    #degats;    // INT
    #defense;   // INT
    #health;    // INT
    #potions;   // [OBJECTS]
    #armes;     // [OBJECTS]

    // Variables statiques utiles
    static damage     =   3;
    static minDef     =   1;
    static maxDef     =   5;
    static maxArmes   =   4;
    static minForce   =   3;
    static maxForce   =  10;
    static maxPotions =   5;
    static maxHealth  = 100;
    
    // Constructeur
    constructor(prenom, nom){
        this.Init(prenom, nom);
    };

    // Méthode Init appelée par le constructeur
    Init(prenom, nom){
        this.SetNom = nom;
        this.SetPrenom = prenom;
        this.SetForce = Math.floor(Math.random() * (Heros.maxForce - Heros.minForce) + Heros.minForce);
        this.SetDegats = this.GetForce * Heros.damage;
        this.SetDefense = Math.floor(Math.random() * (Heros.maxDef - Heros.minDef) + Heros.minDef);
        this.SetHealth = Heros.maxHealth;
        this.SetPotions = [];
        this.SetArmes   = [];
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

    // Méthode qui peut être appelée pour ajouer une arme ou une nouvelle potion
    // Sans excéder la limite d'objet dans le sac du Heros
    AjouterEquipement(nomEquipement){
        if (nomEquipement == "potion"){
            // Rajoute une chaine de caractère "potion" dans le sac à potions
            if (this.#potions.length < Heros.maxPotions){
                this.#potions.push("potion");
                console.log("Vous avez récupéré une potion");
            } else {
                console.log("Impossible d'ajouter une potion, votre sac de potions est plein");
            }
        // Rajoute une chaine de caractère (nomEquipement) dans le sac à equipements
        } else {
            if (this.#armes.length < Heros.maxArmes){
                
                this.#armes.push(nomEquipement);
                this.SetDegats = this.GetDegats + 4;
                console.log("Vous avez récupéré une arme: " + nomEquipement + " vos dégats sont de: " + this.GetDegats);
            } else {
                console.log("Impossible d'ajouter une arme, votre sac d'équipements est plein");
            }
        }
    }

    // Méthode qui peut être appelée pour utiliser une potion existante dans le sac
    // Régénère 10 HPs au Heros sans excéder la limite Heros.maxHealth
    UtiliserPotion(){
        // Verifier si on a des potions dans le sac
        if (this.#potions.length == 0){
            console.log("Votre sac de potions est vide!");
        // Retirer la dernière potion ajoutée
        } else { 
            this.#potions.splice((this.#potions.length - 1), 1);
            this.SetHealth = this.#health + 10;
        }
    }

    // Getters & Setters
    get GetNom(){
        return this.#nom;
    }

    set SetNom(nom){
        this.#nom = nom;
    }

    get GetPrenom(){
        return this.#prenom;
    }

    set SetPrenom(prenom){
        this.#prenom = prenom;
    }

    get GetForce(){
        return this.#force;
    }

    set SetForce(force){
        this.#force = force;
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
            console.log("Le Heros est décédé!");
        } else if (tmp > Heros.maxHealth){
            this.#health = Heros.maxHealth;
            console.log("Les points de vie ne peuvent exceder: " + Heros.maxHealth + " le Heros a maintenant: " + Heros.maxHealth + " points de vie");
        } else {
            this.#health = tmp;
        }
    }

    get GetPotions(){
        return this.#potions;
    }

    set SetPotions(potions){
        this.#potions = potions;
    }

    get GetArmes(){
        return this.#armes;
    }

    set SetArmes(armes){
        this.#armes = armes;
    }
};