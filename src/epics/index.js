import { mapTo, delay, debounce, merge, concat } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { combineEpics } from 'redux-observable'
import { of, pipe } from 'rxjs'

const enteringTextEpic = action$ =>
  action$.pipe(
    ofType('SET_TODO'),
    delay(1000),
    mapTo({ type: 'SET_MESSAGE', text: 'you are entering text' }).concat(
      mapTo({ type: 'SET_MESSAGE', text: 'not' })
    )
  )
// const messageEpic = action$ =>
//   action$.pipe(
//     ofType('SET_MESSAGE'),
//     debounce(() => timer(600)),
//     mapTo({ type: 'SET_MESSAGE', text: 'now you are not' })
//   )

const epica = combineEpics(enteringTextEpic)

export default epica
