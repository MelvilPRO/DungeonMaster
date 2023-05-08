export class GameInterface {
    #stepDom;
    #stepNum;
    static MaxStepNum = 10;

    #loseDom;

    #hero;
    #gameMonsters;

    constructor(stepNum, hero, gameMonsters){
        this.stepNum = stepNum;
        this.stepDom = document.querySelector("#step");
        this.#stepDom.innerHTML = "Etage: " + this.stepNum;
        this.loseDom = document.querySelector("#lose");
        this.hero = hero;
        this.gameMonsters = gameMonsters;
        this.showButtons();
        this.showEquipements();
    }

    // Méthode utilisée lors d'un passage de niveau
    nextStep() {
        if (this.stepNum < GameInterface.MaxStepNum){
            this.stepNum += 1;
            this.#stepDom.innerHTML = "Etage: " + this.stepNum;
        } else {
            console.log("Vous avez atteint le niveau maximal, fin de la partie!");
        }
    }

    // Méthode utilisée lorsque vous avez perdu
    showYouLose() {
        this.loseDom.style.display = "block";
        this.loseDom.style.textAlign = "center";
    }

    // Méthode utilisée pour afficher les différents boutons disponibles
    showButtons(attaquer = true, utiliser = false, suivant = false) {
        if (attaquer) {
            let btnAttack = document.querySelector("#btnAttack");
            btnAttack.style.display = "block";
        }

        if (utiliser) {
            let btnUtiliser = document.querySelector("#btnUtiliser");
            btnUtiliser.style.display = "block";
        }

        if (suivant) {
            let btnNext = document.querySelector("#btnNext");
            btnNext.style.display = "block";
        }
    }

    // Méthode utilisée pour afficher les différents équipements
    showEquipements() {
        let bagDom = document.querySelector("#bag");
        bagDom.style.display = "block";

        let equipementDom = document.querySelector("#equipement");
        equipementDom.style.display = "block";

        let potionsDom = document.querySelector("#potions");
        potionsDom.style.display = "block";
    }

    get stepDom() {
        return this.#stepDom;
    }

    set stepDom(tmp) {
        this.#stepDom = tmp;
    }

    get stepNum() {
        return this.#stepNum;
    }

    set stepNum(tmp) {
        this.#stepNum = tmp;
    }

    get loseDom() {
        return this.#loseDom;
    }

    set loseDom(tmp) {
        this.#loseDom = tmp;
    }

    get hero() {
        return this.#hero;
    }

    set hero(tmp) {
        this.#hero = tmp;
    }

    get gameMonsters() {
        return this.#gameMonsters;
    }

    set gameMonsters(tmp) {
        this.#gameMonsters = tmp;
    }
}