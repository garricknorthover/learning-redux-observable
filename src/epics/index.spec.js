import { marbles } from 'rxjs-marbles/jest'
import enteringTextEpic from './index'
import messageEpic from './index'
import { merge } from 'rxjs'

describe('entering text epic', () => {
  it(
    'should just feckin work',
    marbles(m => {
      const values = {
        a: { type: 'SET_TODO' },
        b: { type: 'SET_MESSAGE', text: 'you are entering text' },
        c: { type: 'SET_MESSAGE', text: 'now you are not' }
      }

      const source1$ =  m.cold('- a ------------  ', values)
      const source2$ =  m.cold('- ----- c ------  ', values)
      const expected$ = m.cold('- 600ms b ---- c  ', values)
      const actual$ = merge(enteringTextEpic(source1$), messageEpic(source2$))

      m.expect(actual$).toBeObservable(expected$)
    })
  )
})
