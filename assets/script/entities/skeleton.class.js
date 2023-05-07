import { Monster } from "./monster.class.js";

export class Skeleton extends Monster {
    static linkToImg = 'assets/img/';
    static variousColor = ['skeleton.green.png', 'skeleton.red.png', 'skeleton.white.png'];

    // Max taux de drop des potions / des armes
    static luckWeapon = 5;
    static luckPotion = 3;
    static MonsterType = 1;

    _dom;

    constructor(atk, def, life, tgt) {
        let random = Math.floor(Math.random() * 3);
        let sprite = Skeleton.linkToImg + Skeleton.variousColor[random];
        super('Skeleton', atk, def, life, sprite, tgt);
        this.addToDom()
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('skeleton');
        this._dom.src = this.image;
        this.target.appendChild(this._dom);
    }

    removeFromDom() {
        this.target.removeChild(this._dom)
    }

    leaveReward() {
        let randomPotion = Math.floor(Math.random() * (Skeleton.luckPotion + 1));
        let randomWeapon = Math.floor(Math.random() * (Skeleton.luckWeapon + 1));

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