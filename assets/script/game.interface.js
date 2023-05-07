export class GameInterface {
    #stepDom;
    #stepNum;
    static MaxStepNum = 10;

    #loseDom;

    #gameMonsters;

    constructor(stepNum, gameMonsters){
        this.stepNum = stepNum;
        this.stepDom = document.querySelector("#step");
        this.#stepDom.innerHTML = "Etage: " + this.stepNum;
        this.#loseDom = document.querySelector("#lose");
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

    // Méthode utilisée lorsque vous avez perdu
    showYouLose() {
        this.loseDom.style.display = "block";
        this.loseDom.style.textAlign = "center";
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

    get gameMonsters() {
        return this.#gameMonsters;
    }

    set gameMonsters(tmp) {
        this.#gameMonsters = tmp;
    }
}