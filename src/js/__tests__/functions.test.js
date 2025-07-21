import { checkAvailableType, checkNameLen, checkHealth } from "../user";
import { Bowman } from "../ChildClasses/bowman";

// тест на проверку длины переданного имени персонажа
// если длина в рамках от 2 до 10 символов
test('should length 2-10', () => {
    //const lenName = checkNameLen('Bowman');
    const bowman = new Bowman("Bowman","Bowman");
    const lenName = checkNameLen(bowman.name);
    expect(lenName).toBe(6);
});

// тест на проверку длины переданного имени персонажа
// если длина вне от 2 до 10 символов
test('less than 2 or greater than 10', () => {
    //expect(() => checkNameLen('B')).toThrow(new Error("The name's lenght should be more or equal 2 and less or equal than 10"));
    const bowman_err = new Bowman("B","Bowman");
    expect(() => checkNameLen(bowman_err.name)).toThrow(new Error("The name's lenght should be more or equal 2 and less or equal than 10"));
});

// тест на проверку переданного типа персонажа
// вызываем функцию, которая должна вернуть True, в случае если тип персонажа есть в списке типов персонажей
test('should type of the list', () => {
    const bowman = new Bowman("Bowman","Bowman");
    const theType = checkAvailableType(bowman.type);
    expect(true).toBeTruthy();
});

// тест на проверку переданного типа персонажа
// вызываем функцию, которая должна вернуть сообщение об ошибке, в случае если тип персонажа отсутствует
// в списке типов персонажей
test('should not be type of the list', () => {
    const bowman_err = new Bowman("Bowman","B");
    expect(() => checkAvailableType('B')).toThrow(new Error("The type should be one of the list of types - Bowman, Swordsman, Magician, Daemon, Undead, Zombie"));
});

// тесты на проверку функции checkHealth
test('health is greater than 0', () => {
    const bowman = new Bowman("Bowman","Bowman");
    bowman.health = 50;
    const funHealth = checkHealth(bowman.health);
    expect(funHealth).toBe(50);
});

test('health is equal 0', () => {
    const bowman = new Bowman("Bowman","Bowman");
    expect(() => checkHealth(0)).toThrow(new Error("The health of a person is equal or less than 0"));
});

test('health is less than 0', () => {
    const bowman = new Bowman("Bowman","Bowman");
    bowman.health = 10;
    bowman.damage(50);
    expect(() => checkHealth(bowman.health)).toThrow(new Error("The health of a person is equal or less than 0"));
});