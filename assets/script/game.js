import { Hero } from './entities/hero.class.js';
import { Spider } from './entities/spider.class.js';
import { Skeleton } from './entities/skeleton.class.js';
import { Boss } from './entities/boss.class.js';

import { GameInterface } from './game.interface.js';

let backgroundDom = document.querySelector("#background");

let alita = new Hero("Alita", "Zelielh");
console.log(alita);

function getRandomMonsters () {
    let gameMonsters = [];

    for (let i = 0; i < GameInterface.MaxStepNum; i++) {
        let monsterType = Math.floor(Math.random() * Boss.MonsterType);
        let monsterCurr;
        switch (monsterType){
            case Spider.MonsterType:
                monsterCurr = new Spider(2, 3, 100, backgroundDom);
                break;
            case Skeleton.MonsterType:
                monsterCurr = new Skeleton(3, 4, 100, backgroundDom);
                break;
            case Boss.MonsterType:
                console.log("Le boss ne peut être placé qu'à la fin du tableau!");
                break;
            default:
                console.log("Le type de monstre est inconnu!");
        }

        gameMonsters.push(monsterCurr);
    }

    gameMonsters.push(new Boss(4, 5, 100, backgroundDom));
    return gameMonsters;
}

let gameInterface = new GameInterface(0, getRandomMonsters());