import { filter, mapTo, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';

const someEpic = action$ => action$.pipe(
    filter(action => action.type === 'SET_TODO'),
    delay(600),
    mapTo({ type: 'SET_MESSAGE', text: 'you are entering text what what!' }),
    
  );
  
  const message = action$ => action$.pipe(
    ofType('SET_MESSAGE'),
    delay(2000),
    mapTo({ type: 'SET_MESSAGE', text: 'not now'})
  )

const epica = combineEpics(
  someEpic,
  message
);

export default epica