import { Hero } from './entities/hero.class.js';
import { Spider } from './entities/spider.class.js';
import { Skeleton } from './entities/skeleton.class.js';
import { Boss } from './entities/boss.class.js';

let backgroundDom = document.querySelector("#background");

let alita = new Hero("Alita", "Zelielh");
console.log(alita);

let spider = new Spider(2, 3, 100, backgroundDom);
console.log(spider);

/*
    let skeleton = new Skeleton(3, 4, 100, backgroundDom);
    console.log(skeleton);

    let boss = new Boss(4, 5, 100, backgroundDom);
    console.log(boss);
*/