import { checkHealth } from "../user";
import { Daemon } from "../ChildClasses/daemon";


const daemon = new Daemon("Daemon", "Daemon");
const points = 20;

const levelDaemon = daemon.level;
const attackDaemon = daemon.attack;



test('levelUp increase method test', () => {
    const defenceDaemon = daemon.defence;
    daemon.health = 50;
    daemon.levelUp();
    expect(daemon.level).toBe(levelDaemon + 1);
    expect(daemon.health).toBe(100);
    expect(daemon.attack).toBe(attackDaemon + attackDaemon * 0.2);
    expect(daemon.defence).toBe(defenceDaemon + defenceDaemon * 0.2);
});

test('levelUp increase method test for health = 0', () => {
    daemon.health = 0;
    //daemon.levelUp();
    //expect(() => checkHealth(daemon.health)).toThrow(new Error ("To increase the level the health value must be greater than 0"));
    expect(() => daemon.levelUp()).toThrow(new Error ("To increase the level the health value must be greater than 0"));
    //expect(() => checkHealth(daemon.health)).toThrow();
});

test('damage method test', () => {
    daemon.health = 100;
    const healthDaemon = daemon.health;
    const defenceDaemon = daemon.defence;
    daemon.damage(points);
    expect(daemon.health).toBeCloseTo((healthDaemon - points * (1 - defenceDaemon / 100)),1);
    //expect(() => daemon.damage(points)).toBeCloseTo((healthDaemon - points * (1 - defenceDaemon / 100)),1);
});

test('damage for health less than 0', () => {
    daemon.health = -1;
    //daemon.damage(points);
    //expect(() => checkHealth(daemon.health)).toThrow(new Error ("You are already died"));
    //expect(() => checkHealth(daemon.health)).toThrow();
    expect(() => daemon.damage(points)).toThrow("You are already died");
});


