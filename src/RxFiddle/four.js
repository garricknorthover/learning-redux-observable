import { take, concatAll, concat } from 'rxjs/operators'
import { interval, of } from 'rxjs'

const one = interval(1000).pipe(take(5))
const two = interval(500).pipe(take(2))
const three = interval(2000).pipe(take(1))

of(one, two, three)
  .pipe(concatAll())

/**
 * concat doesn't work because one two three are inner observables
 */

of('one', 'two', 'three').pipe(concat())
.subscribe(console.log)
/**
 * works bc they are not nested obsevables
 */
