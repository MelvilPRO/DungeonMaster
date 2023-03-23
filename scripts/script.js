import { Heros } from './heros.class.js';
import { Creature } from './creature.class.js';
import { Monstre } from './monstre.class.js';

let monHeros = new Heros("Jean", "Kevin", 11, 100, 8, 3);
console.log(monHeros);
monHeros.AjouterEquipement("arme");
monHeros.AjouterEquipement("arme");

let randomCreature = new Creature("Zombie", 1, 4, 100, ["path1", "path2"], monHeros);
console.log(randomCreature);

let monster = new Monstre("MonsterEx", 2, 5, 100, ["path1"], monHeros);
console.log(monster);