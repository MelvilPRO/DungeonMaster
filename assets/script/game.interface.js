import { Game } from "./game.js";

export class GameInterface {
    #stepDom;
    #stepNum;

    static BackgroundPaths = "assets/img/backgrounds/";
    static EquipementsPath = 'assets/img/';
    static MaxStepNum = 10;

    #loseDom;
    #btnAttack;
    #btnUtiliser;
    #btnNext;

    #bagDom;
    #equipementDom;
    #potionsDom;
    #pvHeroDom;
    #pvMonsterDom;

    #potionsImageList;

    #hero;
    #gameMonsters;

    constructor(stepNum, hero, gameMonsters){
        this.stepNum = stepNum;
        this.stepDom = document.querySelector("#step");
        this.stepDom.innerHTML = "Etage: " + (this.stepNum + 1);
        this.loseDom = document.querySelector("#lose");
        this.btnAttack = document.querySelector("#btnAttack");
        this.btnUtiliser = document.querySelector("#btnUtiliser");
        this.btnNext = document.querySelector("#btnNext");
        this.bagDom = document.querySelector("#bag");
        this.potionsDom = document.querySelector("#potions");
        this.equipementDom = document.querySelector("#equipement");
        this.pvHeroDivDom = document.querySelector("#pvHeroDiv");
        this.pvMonsterDivDom = document.querySelector("#pvMonsterDiv");
        this.potionsImageList = [];
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

    monsterDeathReward(){
        let givenReward = this.gameMonsters[this.stepNum].leaveReward();
        if (givenReward != null) {
            let newImageDom = document.createElement('img');
            newImageDom.src = GameInterface.EquipementsPath + givenReward + ".png";

            switch(givenReward){
                case 'potions':
                    this.potionsDom.appendChild(newImageDom);
                    this.potionsImageList.push(newImageDom);
                    break;
                case 'weapon':
                    this.equipementDom.appendChild(newImageDom);
                    break;
                default:
                    console.log("Unknown given reward");
            }
            
            this.hero.getStuff(givenReward);
        }
    }

    // Action du bouton Attaquer
    attackButtonAction(){
        // Si le monstre actuel est mort
        if (this.hero.attack(this.gameMonsters[this.stepNum])) {
            this.pvMonsterDivDom.style.height = "0%";
            this.monsterDeathReward();
            this.gameMonsters[this.stepNum].removeFromDom();

            // Nous cachons le bouton pour attaquer l'ancien monstre
            this.showAttackButton(false);
            // Nous affichons le bouton pour utiliser une potion (si bagWeapons)
            this.showPotionButton(true);
            // Nous affichons le bouton pour aller au niveau suivant
            this.showNextButton(true);
        } else {
            this.pvMonsterDivDom.style.height = this.gameMonsters[this.stepNum].life + "%";
        }

        this.gameMonsters[this.stepNum].attack(this.hero);
        this.pvHeroDivDom.style.height = this.hero.life + "%";
        if (this.hero.life <= 0){
            this.showYouLose();
        }
    }

    // Action du bouton Utiliser
    potionActionButton(){
        this.hero.usePotions();
        this.pvHeroDivDom.style.height = this.hero.life + "%";
        this.showPotionButton(false);

        // On retire la première image de potion sur le dom
        if (this.potionsImageList.length){
            this.potionsDom.removeChild(this.potionsImageList[0]);
            this.potionsImageList.pop();
        }
    }

    // Action du bouton Suivant
    nextButtonAction(){
        this.nextStep();
        // Nous affichons le bouton pour attaquer le nouveau monstre
        this.showAttackButton(true);
        // Nous cachons le bouton, il y a un nouveau monstre..
        this.showNextButton(false);
        // Nous rajoutons les points de vie de ce nouveau monstre
        this.pvMonsterDivDom.style.height = this.gameMonsters[this.stepNum].life + "%";
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
            this.stepDom.innerHTML = "Etage: " + (this.stepNum + 1);
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
        if (tmpBool && this.hero.bagPotions > 0) {
            btnUtiliser.style.display = "block";
        } else {
            console.log("Vous n'avez pas de potions, le bouton Utiliser reste invisible!");
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
        this.bagDom.style.display = "block";
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

    get bagDom() {
        return this.#bagDom;
    }

    set bagDom(tmp) {
        this.#bagDom = tmp;
    }

    get equipementDom() {
        return this.#equipementDom;
    }

    set equipementDom(tmp) {
        this.#equipementDom = tmp;
    }

    get potionsDom() {
        return this.#potionsDom;
    }

    set potionsDom(tmp) {
        this.#potionsDom = tmp;
    }

    get pvHeroDom() {
        return this.#pvHeroDom;
    }

    set pvHeroDom(tmp) {
        this.#pvHeroDom = tmp;
    }

    get pvMonsterDom() {
        return this.#pvMonsterDom;
    }

    set pvMonsterDom(tmp) {
        this.#pvMonsterDom = tmp;
    }

    get potionsImageList() {
        return this.#potionsImageList;
    }

    set potionsImageList(tmp) {
        this.#potionsImageList = tmp;
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