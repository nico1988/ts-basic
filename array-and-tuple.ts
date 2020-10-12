let arrOfNumbers: number[] = [1,2,3]
arrOfNumbers.push(3)

function test() {
  console.log(arguments); // IArguments
}

let user: [string, number] = ['viking', 20]; // 元组起源于函数式编程 python中也有 就是不同类型的数据在数组里  如果用any就丧失了
