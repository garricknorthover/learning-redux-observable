import { marbles } from 'rxjs-marbles/jest'
import enteringTextEpic from './index'


describe('entering text epic', () => {
  it(
    'should just feckin work',
    marbles(m => {
      const values = {
        a: { type: 'SET_TODO' },
        b: { type: 'SET_MESSAGE', text: 'you are entering text' }
      }

      const action$ = m.cold('- a        --|', values)
      const expected$ = m.cold('- 1000ms b --|', values)
      const actual$ = enteringTextEpic(action$)

      m.expect(actual$).toBeObservable(expected$)
    })
  )
})
