import { mapTo } from 'rxjs/operators'
import { interval, merge } from 'rxjs'

// emit every 2.5 seconds
const first = interval(2500)
// emit every 2 seconds
const second = interval(200)
// emit every 1.5 seconds
const third = interval(1500)
// emit every 1 second
const fourth = interval(1000)

merge(
  first.pipe(mapTo('FIRST')),
  second.pipe(mapTo('SECOND')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
).subscribe(console.log)
