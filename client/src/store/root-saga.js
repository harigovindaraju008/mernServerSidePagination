import { all, call } from 'redux-saga/effects';
import { userSagas } from '../containers/Users/sagas';
// intialize sagas
export default function* rootSaga() {
  yield all([call(userSagas)]);
}
