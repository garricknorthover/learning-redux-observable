import { filter, mapTo, delay } from 'rxjs/operators'
const someEpic = action$ => action$.pipe(
    filter(action => action.type === 'SET_TODO'),
    delay(2000),
    mapTo({ type: 'ADD_TODO' })
  );
  
  export default someEpic