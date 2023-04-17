import { Hero } from './entities/hero.class.js';
import { Spider } from './entities/spider.class.js';
import { Skeleton } from './entities/skeleton.class.js';
import { Boss } from './entities/boss.class.js';

let alita = new Hero("Alita", "Zelielh");
console.log(alita);

let spider = new Spider("Gligli", 2, 3, 100, alita);
console.log(spider);

let skeleton = new Skeleton("Skeske", 3, 4, 100, alita);
console.log(skeleton);

let boss = new Boss("Bowser", 4, 5, 100, alita);
console.log(boss);