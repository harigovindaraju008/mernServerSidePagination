import UserActionTypes from './types';

export const getUsers = () => ({
  type: UserActionTypes.GET_USERS
});

export const getUsersSuccess = (userList) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: userList
});

export const getUsersFailed = error => ({
  type: UserActionTypes.GET_USERS_FAILED,
  payload: error
});

export const updateUser = () => ({
  type: UserActionTypes.UPDATE_USER
});

export const updateUserSuccess = () => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
});

export const updateUserFailed = error => ({
  type: UserActionTypes.UPDATE_USER_FAILED,
  payload: error
});

export const onChangeValue = (evt) => {
  return {
    type: UserActionTypes.USER_INPUT_VALUE_CHANGED,
    id: (!evt.target.id) ? evt.target.name : evt.target.id,
    value: evt.target.value,
  };
}
