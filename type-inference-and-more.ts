// type inference
let str = 'str' // 类型推论

// union types
let numberOrString: number | string // 联合类型

function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number; // 类型断言
    return number.toString().length
  }
}

//type guard
function getLength2(input: string | number): number {
  if (typeof input === 'string') { // 类型守卫
    return input.length
  } else {
    return input.toString().length
  }
}
