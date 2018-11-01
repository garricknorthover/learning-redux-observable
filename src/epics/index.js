import { mapTo, delay, takeUntil } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { combineEpics } from 'redux-observable'

const enteringTextEpic = action$ =>
  action$.pipe(
    ofType('SET_TODO'),
    delay(1000),
    mapTo({ type: 'SET_MESSAGE', text: 'you are entering text' }),
  )

const epica = combineEpics(enteringTextEpic)

export default epica
