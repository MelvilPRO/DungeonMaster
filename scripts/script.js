import { Heros } from './heros.class.js';
import { Monstre } from './monstre.class.js';

let monHeros = new Heros("Jean", "Kevin", 11, 100, 8, 3);
console.log(monHeros);
monHeros.AjouterEquipement("arme");
monHeros.AjouterEquipement("arme");

monHeros.UtiliserPotion();

let zombie = new Monstre("Zombie villageois", 2, 5, 100, ["pathImage1"], monHeros);
console.log(zombie);