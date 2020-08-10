import {
  toggleIsLoading,
  setTodos,
  setError,
  loadUser,
  setUserError,
  toggleUserIsLoadin,
  setUserId,
} from './store';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const loadData = (dataToLoad, userId) => async(dispatch) => {
  switch (dataToLoad) {
    case 'todos':
      dispatch(toggleIsLoading());
      fetch(`${API_URL}/todos`)
        .then(response => response.json())
        .then((result) => {
          dispatch(setTodos(result));
          dispatch(toggleIsLoading());
        })
        .catch(() => {
          dispatch(toggleIsLoading());
          dispatch(setError());
        });
      break;
    case 'user':
      dispatch(setUserId);
      dispatch(toggleUserIsLoadin());
      fetch(`${API_URL}/users/${userId}`)
        .then(response => response.json())
        .then((result) => {
          dispatch(loadUser(result));
          dispatch(toggleUserIsLoadin());
        })
        .catch(() => {
          dispatch(toggleUserIsLoadin());
          dispatch(setUserError());
        });
      break;
    default:
      break;
  }
};
