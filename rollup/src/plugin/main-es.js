import { a, b, random } from 'sam-test-data-es'

console.log(a, b, random)
export default (base) => {
  return random(base)
}
