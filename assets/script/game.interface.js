export class GameInterface {
    #stepDom;
    #stepNum;
    static MaxStepNum = 10;

    #gameMonsters;

    constructor(stepNum, gameMonsters){
        this.stepNum = stepNum;
        this.stepDom = document.querySelector("#step");
        this.#stepDom.innerHTML = "Etage: " + this.stepNum;

        this.gameMonsters = gameMonsters;
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

    get gameMonsters() {
        return this.#gameMonsters;
    }

    set gameMonsters(tmp) {
        this.#gameMonsters = tmp;
    }
}