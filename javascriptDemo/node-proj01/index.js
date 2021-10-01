import { greet } from './GreetService.js'

//import { sum,dif,prd,qut,rem} from './ArithService.js'
import * as arth from './ArithService.js'
import arth2 from './ArithService2.js'

console.log("This is my first node project");

console.log(greet("Vamsy"))

console.log(arth.sum(10,7));
console.log(arth.dif(10,7));
console.log(arth.prd(10,7));
console.log(arth.qut(10,7));
console.log(arth.rem(10,7));

console.log(arth2.sum(10,7));
console.log(arth2.dif(10,7));
console.log(arth2.prd(10,7));
console.log(arth2.qut(10,7));
console.log(arth2.rem(10,7));
