import { checkAvailableType, checkNameLen } from "../user";

export default class Character {
    constructor (name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        checkNameLen(this.name);
        checkAvailableType(this.type);
    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = this.attack + this.attack * 0.2;
            this.defence = this.defence + this.defence * 0.2;
            this.health = 100;
        } else {
            throw new Error('To increase the level the health value must be greater than 0');
        }
    }
    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            throw new Error('You are already died');
        }
    } 
};