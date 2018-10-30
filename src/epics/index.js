import { mapTo, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';

const enteringTextEpic = action$ => action$.pipe(
    ofType('SET_TODO'),
    delay(600),
    mapTo({ type: 'SET_MESSAGE', text: 'you are entering text what what!' }),
    
  );
  
  const notEnteringTextEpic = action$ => action$.pipe(
    ofType(!'SET_TODO'),
    delay(2000),
    mapTo({ type: 'SET_MESSAGE', text: 'not now'})
  )

const epica = combineEpics(
  enteringTextEpic,
  notEnteringTextEpic
);

export default epica