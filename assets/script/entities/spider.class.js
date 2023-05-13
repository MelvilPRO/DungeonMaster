import { Monster } from "./monster.class.js";


export class Spider extends Monster {
    static linkToImg = 'assets/img/';
    static variousColor = ['spider.black.png', 'spider.blue.png', 'spider.gold.png'];

    // Max taux de drop des potions / des armes
    static luckWeapon = 1;
    static luckPotion = 5;
    static MonsterType = 0;

    _dom;

    constructor(atk, def, life, tgt) {
        let random = Math.floor(Math.random() * 3);
        let sprite = Spider.linkToImg + Spider.variousColor[random];
        super('Spider', atk, def, life, sprite, tgt);
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('spider');
        this._dom.src = this.image;
        this.target.appendChild(this._dom);
    }

    removeFromDom() {
        this.target.removeChild(this._dom)
    }

    leaveReward() {
        let randomPotion = Math.floor(Math.random() * (Spider.luckPotion + 1));
        let gift = null;

        if (randomPotion == 1) {
            gift = 'potions'
        }

        // console.log(gift)
        return gift;
    }
}