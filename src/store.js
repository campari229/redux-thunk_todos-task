import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const SET_TODOS = 'SET_TODOS';
const LOADING_TOGGLER = 'LOADING_TOGGLER';
const CLEAR_TODOS = 'CLEAR_TODOS';
const SET_TODOS_ERROR = 'SET_TODOS_ERROR';

const LOAD_USER = 'LOAD_USER';
const SET_USER_ID = 'SET_USER_ID';
const LOADING_USER_TOGGLER = 'LOADING_USER_TOGGLER';
const SET_USER_ERROR = 'SET_USER_ERROR';
const CLEAR_USER = 'CLEAR_USER';

export const setTodos = todos => ({
  type: SET_TODOS,
  todos,
});
export const toggleIsLoading = () => ({ type: LOADING_TOGGLER });
export const clearTodods = () => ({ type: CLEAR_TODOS });
export const setError = () => ({ type: SET_TODOS_ERROR });

export const loadUser = user => ({
  type: LOAD_USER,
  user,
});
export const toggleUserIsLoadin = () => ({ type: LOADING_USER_TOGGLER });
export const setUserError = () => ({ type: SET_USER_ERROR });
export const setUserId = id => ({
  type: SET_USER_ID,
  id,
});
export const clearUser = () => ({ type: CLEAR_USER });

export const getTodos = state => state.todos;
export const loadingStatus = state => state.isLoading;
export const errorStatus = state => state.loadingError;

export const getSelectedUser = state => state.selectedUser;
export const getUserId = state => state.selectedUserId;
export const loadingUserStatus = state => state.userIsLoading;
export const userErrorStatus = state => state.userError;

const initialState = {
  todos: [],
  isLoading: false,
  loadingError: false,
  selectedUser: undefined,
  selectedUserId: null,
  userIsLoading: false,
  userError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos,
      };

    case 'LOADING_TOGGLER':
      return {
        ...state,
        isLoading: !state.isLoading,
        loadingError: false,
      };

    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: [],
      };

    case 'SET_TODOS_ERROR':
      return {
        ...state,
        loadingError: true,
      };

    case 'LOAD_USER':
      return {
        ...state,
        selectedUser: action.user,
      };

    case 'SET_USER_ID':
      return {
        ...state,
        id: action.id,
      };

    case 'LOADING_USER_TOGGLER':
      return {
        ...state,
        userIsLoading: !state.userIsLoading,
        userError: false,
      };

    case 'SET_USER_ERROR':
      return {
        ...state,
        userError: true,
      };

    case 'CLEAR_USER':
      return {
        ...state,
        selectedUser: undefined,
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
