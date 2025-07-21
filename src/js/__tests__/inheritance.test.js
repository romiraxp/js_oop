import { Daemon } from "../ChildClasses/daemon";
import { Bowman } from "../ChildClasses/bowman";
import Character from "../ParentClasses/character";

const daemon = new Daemon("Daemon","Daemon");
const bowman = new Bowman("Bowman","Bowman");

// тест на проверку создания дочернего класса
test('Daemon and Bowman objects are instances of the "Character" Class', () => {
    expect(daemon).toBeInstanceOf(Character);
    expect(bowman).toBeInstanceOf(Character);
});
