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


interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result >= -1;
};
