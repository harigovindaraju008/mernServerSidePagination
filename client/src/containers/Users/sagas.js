import { takeLatest, put, all, call , select} from 'redux-saga/effects';
import UserActionTypes from './types';
import * as userActions from './actions';
import CONFIG from '../../config/config';
import { toURLString, request } from '../../utils/request';
import {selectUsersValue} from './selectors';

export function* getUsers() {
  let requestURL = (CONFIG.API.local.baseUrl + CONFIG.API.userList);
  const pageSize = yield select(selectUsersValue('pageSize'));
  const pageNumber = yield select(selectUsersValue('pageNumber'));
  

  const options = {
    method: 'GET',
  };

	var params = {
    pageNumber,
    pageSize
	}
	requestURL = requestURL + toURLString(params)
  try {
		const userList = yield call(request, requestURL, options);
		yield put(userActions.getUsersSuccess(userList));
  } catch (err) {
    yield put(userActions.getUsersFailed(err));
  }
}

export function* updateUser() {
  let requestURL = (CONFIG.API.local.baseUrl + CONFIG.API.updateUser);
  const {emailId, _id} = yield select(selectUsersValue('currentUser'));

	const body = {
		id: _id,
		emailId
	}

  const options = {
    method: 'PATCH',
    body
  };

  try {
		yield call(request, requestURL, options);
		yield put(userActions.updateUserSuccess());
		yield put(userActions.getUsers());
  } catch (err) {
    yield put(userActions.updateUserFailed(err));
  }
}

export function* getUsersWatcher() {
  yield takeLatest(UserActionTypes.GET_USERS, getUsers);
}

export function* updateUserWatcher() {
  yield takeLatest(UserActionTypes.UPDATE_USER, updateUser);
}

export function* userSagas() {
  yield all([
    call(getUsersWatcher),
    call(updateUserWatcher)
  ]);
}
