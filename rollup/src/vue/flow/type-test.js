/* @flow */
const obj: Test = {
  a: 1,
  b: 'b',
  c: (p) => {
    return new String(p) instanceof String
  }
}
console.log(obj.c("c"))