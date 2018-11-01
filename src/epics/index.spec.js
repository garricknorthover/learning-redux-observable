import { marbles } from 'rxjs-marbles/jest'
import enteringTextEpic from './index'

it(
  'should just feckin work',
  marbles(m => {
    const values = {
      a: { type: 'SET_TODO' },
      b: { type: 'SET_MESSAGE', text: 'you are entering text what what!' }
    }
    const action$ = m.cold('a----', values)
    const expected$ = m.cold('--b', values)

    const actual$ = enteringTextEpic(action$)

    m.expect(actual$).toBeObservable(expected$)
  })
)
