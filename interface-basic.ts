// interface 鸭子类型
interface Person {
  readonly id: number;
  name: string;
  age?: number; // 该属性可以不存在
}

let viking: Person = {
  id: 1,
  name: 'viking',
  age: 20,
}
