import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

//функция проверки длины имени, которая на вход принимает имя и вычисляет его длину
// Если длина < 2 или > 10 символов, то выкидывает ошибку. 
// Иначе возвращает имя
export function checkNameLen(name) {
  if (name.length < 2 || name.length > 10) {
    throw new Error("The name's lenght should be more or equal 2 and less or equal than 10");
  } else {
    return name.length;
  }
}

// функция проверки типа персонажа, которая на вход принимает тип персонажа и проверяет его вхождение в список допустимых
// Если персонажа нет в спсике, то выктдывает ошибку
// Иначе возвращает тип персонажа
export function checkAvailableType(type) {
  listOfTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (!listOfTypes.includes(type)) {
    throw new Error("The type should be one of the list of types - Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
  } else {
    return type;
  }
}

// функция проверки уровня здоровья
// если уровень здоровья равен 0 или меньше нуля, то выкидываем ошибку
// иначе возвращаем уровень здоровья
export function checkHealth(health) {
    if (health == 0 || health < 0) {
      throw new Error("The health of a person is equal or less than 0");
    } else {
      return health;
    }
}