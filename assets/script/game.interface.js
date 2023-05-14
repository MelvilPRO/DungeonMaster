import { Game } from "./game.js";

export class GameInterface {
    #stepDom;
    #stepNum;

    static BackgroundPaths = "assets/img/backgrounds/";
    static MaxStepNum = 10;

    #loseDom;
    #btnAttack;
    #btnUtiliser;
    #btnNext;

    #hero;
    #gameMonsters;

    constructor(stepNum, hero, gameMonsters){
        this.stepNum = stepNum;
        this.stepDom = document.querySelector("#step");
        this.#stepDom.innerHTML = "Etage: " + this.stepNum;
        this.loseDom = document.querySelector("#lose");
        this.btnAttack = document.querySelector("#btnAttack");
        this.#btnUtiliser = document.querySelector("#btnUtiliser");
        this.#btnNext = document.querySelector("#btnNext");
        this.setButtonsActions();
        this.hero = hero;
        this.gameMonsters = gameMonsters;
        this.gameMonsters[this.stepNum].addToDom();
        this.showButtons();
        this.showEquipements();
    }

    setButtonsActions(){
        this.btnAttack.addEventListener("click", (e) => {
            this.attackButtonAction();
        });

        this.btnUtiliser.addEventListener("click", (e) => {
            this.potionActionButton();
        });

        this.btnNext.addEventListener("click", (e) => {
            this.nextButtonAction();
        });
    }

    // Action du bouton Attaquer
    attackButtonAction(){
        // Si le monstre actuel est mort
        if (this.hero.attack(this.gameMonsters[this.stepNum])) {
            this.gameMonsters[this.stepNum].removeFromDom();
            // TODO: Récupérer le loot de l'ancien monstre!

            // Nous cachons le bouton pour attaquer l'ancien monstre
            this.showAttackButton(false);
            // Nous affichons le bouton pour utiliser une potion (si bagWeapons)
            this.showPotionButton(true);
            // Nous affichons le bouton pour aller au niveau suivant
            this.showNextButton(true);
        }
    }

    // Action du bouton Utiliser
    potionActionButton(){
        this.hero.usePotions();
        this.showPotionButton(true);
    }

    // Action du bouton Suivant
    nextButtonAction(){
        this.nextStep();
        // Nous affichons le bouton pour attaquer le nouveau monstre
        this.showAttackButton(true);
        // Nous affichons le bouton pour utiliser une potion (si bagWeapons)
        this.showPotionButton(true);
        // Nous cachons le bouton, il y a un nouveau monstre..
        this.showNextButton(false);
    }

    addNextMonsterDom() {
        this.gameMonsters[this.stepNum].addToDom();
    }

    switchBackgroundImg() {
        let backgroundDom = document.querySelector("#background");
        backgroundDom.style.backgroundImage = "url(" + GameInterface.BackgroundPaths + "background" + this.stepNum + ".png)";
    }

    // Méthode utilisée lors d'un passage de niveau
    nextStep() {
        if (this.stepNum < GameInterface.MaxStepNum){
            this.stepNum += 1;
            this.addNextMonsterDom();
            this.switchBackgroundImg(this.stepNum);
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

    // Méthode utilisée pour afficher ou cacher les différents boutons disponibles
    showButtons(attaquer = true, utiliser = false, suivant = false) {
        this.showAttackButton(attaquer);
        this.showPotionButton(utiliser);
        this.showNextButton(suivant);
    }

    showAttackButton(tmpBool){
        if (tmpBool) {
            btnAttack.style.display = "block";
        } else {
            btnAttack.style.display = "none";
        }
    }

    showPotionButton(tmpBool){
        if (tmpBool) {
            if (this.hero.bagPotions > 0){
                btnUtiliser.style.display = "block";
            } else {
                console.log("Vous n'avez pas de potions, le bouton Utiliser reste invisible!");
            }
        } else {
            btnUtiliser.style.display = "none";
        }
    }

    showNextButton(tmpBool){
        if (tmpBool) {
            btnNext.style.display = "block";
        } else {
            btnNext.style.display = "none";
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

    get btnAttack() {
        return this.#btnAttack;
    }

    set btnAttack(tmp) {
        this.#btnAttack = tmp;
    }

    get btnUtiliser() {
        return this.#btnUtiliser;
    }

    set btnUtiliser(tmp) {
        this.#btnUtiliser = tmp;
    }

    get btnNext() {
        return this.#btnNext;
    }

    set btnNext(tmp) {
        this.#btnNext = tmp;
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