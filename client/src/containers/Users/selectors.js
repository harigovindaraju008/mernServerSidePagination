import { createSelector } from 'reselect';

const selectUsers = () => state => state.users;

const selectUsersValue = (id) => createSelector(
  selectUsers(),
  (usersState) => usersState[id]
);

export {
  selectUsersValue
}