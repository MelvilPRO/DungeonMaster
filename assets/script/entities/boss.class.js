import { Monster } from "./monster.class.js";

export class Boss extends Monster {
    static linkToImg = 'assets/img/';
    static variousColor = ['boss-1.png', 'boss-2.png', 'boss-3.png'];

    // Max taux de drop des potions / des armes
    static luckWeapon = 2;
    static luckPotion = 2;
    static MonsterType = 2;

    _dom;

    constructor(atk, def, life, tgt) {
        let random = Math.floor(Math.random() * 3);
        let sprite = Boss.linkToImg + Boss.variousColor[random];
        super('Boss', atk, def, life, sprite, tgt);
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('boss');
        this._dom.src = this.image;
        this.target.appendChild(this._dom);
    }

    removeFromDom() {
        this.target.removeChild(this._dom)
    }

    leaveReward() {
        let randomPotion = Math.floor(Math.random() * (Boss.luckPotion + 1));
        let randomWeapon = Math.floor(Math.random() * (Boss.luckWeapon + 1));

        let gift = null;

        if (randomPotion == 1) {
            gift = 'potions'
        }

        if (randomWeapon == 1 && gift == null) {
            gift = 'weapon';
        }

        return gift;
    }
}