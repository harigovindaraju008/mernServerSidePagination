import UserActionTypes from './types';

const INITIAL_STATE = {
  userList: null,
  emailId: '',
  pageSize: 10,
  pageNumber: 1,
  showUpdateModel: false,
  currentUser: false,
  loading: false,
  notify: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_INPUT_VALUE_CHANGED:
        return {...state,  [action.id]: action.value}

    case UserActionTypes.GET_USERS:
      return {...state,  loading: true}    

    case UserActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload.rows,
        totalCount: action.payload.count,
        error: null,
        loading: false
      };

    case UserActionTypes.GET_USERS_FAILED:
      return {
        ...state,
        userList: [],
        totalCount: null,
        error: action.payload.message,
        loading: false,
        notify: {type: 'error', message: "Sorry, unable to get user list"}
      }; 

    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        loading: true
      };  

    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: false,
        loading: false,
        showUpdateModel: false,
        notify: {type: 'success', message: "Updated Successfully!!!"}
      };   
    
    case UserActionTypes.UPDATE_USER_FAILED:
      return {
        ...state,
        currentUser: false,
        error: action.payload.message,
        loading: false,
        showUpdateModel: false,
        notify: {type: 'error', message: action.payload.message}
      };   
    
    default:
      return state;
  }
};

export default userReducer;
