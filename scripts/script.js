import { Heros } from './heros.class.js';
import { Monstre } from './monstre.class.js';
import { Araignee } from './araignee.class.js';
import { Squelette } from './squelette.class.js';
import { Boss } from './boss.class.js';

let monHeros = new Heros("Jean", "Kevin", 11, 100, 8, 3);
console.log(monHeros);
monHeros.AjouterEquipement("arme");
monHeros.AjouterEquipement("arme");

monHeros.UtiliserPotion();

let araignee = new Araignee("Fragileeeuu", 2, 5, 40, monHeros);
console.log(araignee);

let squelette = new Squelette("Nonossssss", 4, 6, 70, monHeros);
console.log(squelette);

let boss = new Boss("Bowserrrrr", 10, 8, 90, monHeros);
console.log(boss);