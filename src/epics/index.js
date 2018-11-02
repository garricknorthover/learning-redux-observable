import { mapTo, delay, debounce } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { combineEpics } from 'redux-observable'
import { timer } from 'rxjs';

const enteringTextEpic = action$ =>
  action$.pipe(
    ofType('SET_TODO'),
    delay(600),
    mapTo({ type: 'SET_MESSAGE', text: 'you are entering text' }),
  )
  const messageEpic = action$ =>
  action$.pipe(
    ofType('SET_MESSAGE'),
    debounce(() => timer(600)),
    mapTo({ type: 'SET_MESSAGE', text: 'now you are not' }),
  )      

const epica = combineEpics(enteringTextEpic, messageEpic)

export default epica
