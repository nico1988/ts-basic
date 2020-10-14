const enum Direction { // 常量美剧 不会编译没用的量
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('go up!')
}

enum D {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

console.log('D.UP:::', D.UP);
console.log('D.UP:::', D[0]);


enum S {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}
