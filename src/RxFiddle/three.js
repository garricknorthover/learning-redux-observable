import { take, delay, map, concatAll  } from 'rxjs/operators'
import { interval, of } from 'rxjs'


const source = interval(2000)

source.pipe(
    map(val => of(val + 10)),
    concatAll(),
    take(3),
)
.subscribe(console.log)

