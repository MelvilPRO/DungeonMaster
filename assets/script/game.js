import { Hero } from './entities/hero.class.js';
import { Spider } from './entities/spider.class.js';
import { Skeleton } from './entities/skeleton.class.js';
import { Boss } from './entities/boss.class.js';

import { GameInterface } from './game.interface.js';

export class Game {
    #backgroundDom;
    #alita;

    #gameInterface;

    constructor(){
        this.backgroundDom = document.querySelector("#background");
        this.alita = new Hero("Alita", "Zelielh");
        this.gameInterface = new GameInterface(0, this.alita, this.getRandomMonsters());
    }

    getRandomMonsters () {
        let gameMonsters = [];
    
        for (let i = 0; i < GameInterface.MaxStepNum - 1; i++) {
            let monsterType = Math.floor(Math.random() * Boss.MonsterType);
            let monsterCurr;
            switch (monsterType){
                case Spider.MonsterType:
                    monsterCurr = new Spider(6, 3, 100, this.backgroundDom);

                    break;
                case Skeleton.MonsterType:
                    monsterCurr = new Skeleton(7, 4, 100, this.backgroundDom);
                    break;
                case Boss.MonsterType:
                    console.log("Le boss ne peut être placé qu'à la fin du tableau!");
                    break;
                default:
                    console.log("Le type de monstre est inconnu!");
            }
    
            gameMonsters.push(monsterCurr);
        }
    
        gameMonsters.push(new Boss(8, 4, 100, this.backgroundDom));
        return gameMonsters;
    }

    get backgroundDom() {
        return this.#backgroundDom;
    }

    set backgroundDom(tmp) {
        this.#backgroundDom = tmp;
    }

    get alita() {
        return this.#alita;
    }

    set alita(tmp) {
        this.#alita = tmp;
    }

    get gameInterface() {
        return this.#gameInterface;
    }

    set gameInterface(tmp) {
        this.#gameInterface = tmp;
    }
}

let gameInstance = new Game();
