import { greet } from './greetService.mjs';
//import { sum,dif,prd,qut,rem } from './arthService.mjs'
import * as arth from './arthService.mjs'
import arth2 from './arthService2.mjs'

console.log("Hello This is my node project");

console.log(greet("Vamsy Kiran"));

console.log(arth.sum(10,7))
console.log(arth.dif(10,7))
console.log(arth.prd(10,7))
console.log(arth.qut(10,7))
console.log(arth.rem(10,7))

console.log(arth2.sum(10,7))
console.log(arth2.dif(10,7))
console.log(arth2.prd(10,7))
console.log(arth2.qut(10,7))
console.log(arth2.rem(10,7))