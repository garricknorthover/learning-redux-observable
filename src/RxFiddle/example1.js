import { ofType } from 'redux-observable';
import { of, from, concat } from 'rxjs'; // works for RxJS v6
import { delay, merge, map, flatMap, catchError } from 'rxjs/operators'; // line changed
import axios from 'axios';

const apiGet = async () => {
  return await axios({ url: 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.2.1/rxjs.umd.min.js' });
  // to generate API response error (403) use e.g.:
  // return await axios({ url: 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.2.1/rxjs.umd.min.jsNONEXISTING' });
};

const testEpic = action$ => action$.pipe(
  ofType('CONNECT'), // this action will trigger epic start
  // delay(3000),
  flatMap(action => concat(
    of({ type: 'TEST_PREPARE' }), // dispatch TEST_PREPARE at the beginning
    from(apiGet()).pipe( // convert async/await to Observable
      // delay(3000),
      map(response => {
        console.log(response);
        return { type: 'TEST_SUCCESS' }; // dispatch TEST_SUCCESS after receiving data
      }),
      // catchError(error => of({ type: 'TEST_ERROR' })), // catch ERROR here to always dispatch TEST_AFTER_SUCCESS action
    ),
    of({ type: 'TEST_AFTER_SUCCESS' }), // dispatch TEST_AFTER_SUCCESS, just because we can
  ),
  catchError(error => of({ type: 'TEST_ERROR' })), // catch ERROR here to avoid dispatching TEST_AFTER_SUCCESS on error
  )),
);