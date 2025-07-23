import { checkAvailableType, checkNameLen } from "../user";

export default class Character {
    constructor (name, type) {
//        this.name = name; мое написание ошибочно
//        this.type = type; мое написание ошибочно
        this.name = checkNameLen(name); // мнение эксперта
        this.type = checkAvailableType(type); // мнение эксперта
        this.health = 100;
        this.level = 1;
        //checkNameLen(this.name); мое написание ошибочно
        //checkAvailableType(this.type); мое написание ошибочно
    }
    levelUp() {
        // мое написание ошибочно, лучше сразу проверять сначала на ошибку, а затем истинное условие
        /*        if (this.health > 0) {
            this.level += 1;
            this.attack = this.attack + this.attack * 0.2;
            this.defence = this.defence + this.defence * 0.2;
            this.health = 100;
        } else {
            throw new Error('To increase the level the health value must be greater than 0');
        }*/
        
            // рекомендация эксперта
        if (this.health <= 0) {
            throw new Error('To increase the level the health value must be greater than 0');
        } else {
            this.level += 1;
            this.attack = this.attack + this.attack * 0.2;
            this.defence = this.defence + this.defence * 0.2;
            this.health = 100;
        }
    }
    damage(points) {
        // мое написание ошибочно, лучше сразу проверять сначала на ошибку, а затем истинное условие
        /*if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            throw new Error('You are already died');
        }*/
        
        // рекомендация эксперта
        if (this.health < 0) {
            throw new Error('You are already died');
        } else {
            this.health -= points * (1 - this.defence / 100);
        }
    } 
};