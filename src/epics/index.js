import { mapTo, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { combineEpics } from 'redux-observable'

const enteringTextEpic = action$ =>
  action$.pipe(
    ofType('SET_TODO'),
    delay(2),
    mapTo({ type: 'SET_MESSAGE', text: 'you are entering text what what!' }),
    
  )

const epica = combineEpics(enteringTextEpic)

export default epica
