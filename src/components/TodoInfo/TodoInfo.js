import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingStatus, getTodos, clearTodods, errorStatus } from '../../store';

import { loadData } from '../../api';

export const TodoInfo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const isLoading = useSelector(loadingStatus);
  const error = useSelector(errorStatus);

  if (!todos.length) {
    if (isLoading) {
      return <p className="info">Loading...</p>;
    }

    if (!isLoading && error) {
      return (
        <p className="info">
          Failed loading todos
          <button
            onClick={() => dispatch(loadData('todos'))}
            type="button"
          >
          Reload
          </button>
        </p>
      );
    }

    if (!isLoading) {
      return (
        <p className="info">
          Todos are not loaded yet
          <button
            onClick={() => dispatch(loadData('todos'))}
            type="button"
          >
            {isLoading ? '...loading' : 'load data'}
          </button>
        </p>
      );
    }
  }

  return (
    <p className="info">
      {`${todos.length} todos are loaded`}
      <button
        type="button"
        onClick={() => dispatch(clearTodods())}
      >
        Clear
      </button>
    </p>
  );
};
