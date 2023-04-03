import { Hero } from "./hero.class.js";
import { Monster } from "./monster.class.js"
import { Spider } from "./spider.class.js";
import { Skeleton } from "./skeleton.class.js";
import { Boss } from "./boss.class.js";

let alita = new Hero("Alita", "Zelielh");
console.log(alita);

let frankeinstein = new Monster("Frankeinstein", 1, 3, 100, "Test", "Test");
console.log(frankeinstein);

let spider = new Spider("Gligli", 2, 3, 100, alita);
console.log(spider);

let skeleton = new Skeleton("Skeske", 3, 4, 100, alita);
console.log(skeleton);

let boss = new Boss("Bowser", 4, 5, 100, alita);
console.log(boss);