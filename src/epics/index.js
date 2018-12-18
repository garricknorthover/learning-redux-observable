import { ofType } from 'redux-observable'
import { of, from, concat } from 'rxjs'
import { delay, merge, map, flatMap } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'

const enteringTextEpic = action$ =>
  action$.pipe(
    ofType('SET_TODO'),
    flatMap(action =>
      concat(
        of({ type: 'SET_MESSAGE', text: 'you are entering text' }),
        of({ type: 'SET_MESSAGE', text: 'not' })
      )
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
