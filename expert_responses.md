Добрый день, Роман
```
 ● levelUp increase method test for health=0

    To increase the level the health value must be greater than 0

      18 |             this.health = 100;
      19 |         } else {
    > 20 |             throw new Error('To increase the level the health value must be greater than 0');
         |                   ^
      21 |         }
      22 |     }
      23 |

      at Daemon.levelUp (src/js/ParentClasses/character.js:20:19)
      at Object.levelUp (src/js/__tests__/method.test.js:25:12)
```
... тест ожидает, что при health=0 будет выброшено исключение, но в коде видно, что исключение выбрасывается внутри метода levelUp, а не в checkHealth
то есть -  Вы пытаетесь проверить исключение через checkHealth, но оно уже было обработано в levelUp
```
test('levelUp increase method test for health=0', () => {
    daemon.health = 0;
    expect(() => daemon.levelUp()).toThrow("To increase the level the health value must be greater than 0");
});
```
... попробуйте такое решение - выше.

Вторя ошибка (damage method test):

ожидается health ≈ 88.75, но получается 89.5
вероятно, проблема в округлении или в начальных значениях defence
Решение:

проверить начальное значение defenceDaemon - возможно, оно не то, что Вы ожидаете
или изменить ожидаемое значение в тесте - если логика изменилась
Третья ошибка (damage для health < 0):

аналогично первой - исключение выбрасывается в damage, а не в checkHealth
```
test('damage for health less than 0', () => {
    daemon.health = -1;
    expect(() => daemon.damage(points)).toThrow("You are already died");
});
```
... такой вариант - должен быть правильным

Вообще - здесь не слишком удобно писать комментарии к Вашей работе - я Вас попрошу - разместить (вернуть) ее - в ЛК. Так гораздо удобнее делать ревью по работе