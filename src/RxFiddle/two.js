import { observable, of } from 'rxjs'
import { take, delay, concat } from 'rxjs/operators'

const one = of(1, 2, 3)

const two = of(4, 5, 6)

// one.pipe(concat(two)).subscribe(console.log)
const three = two.pipe(delay(3000))
 

one.pipe(concat(three)).subscribe(console.log)