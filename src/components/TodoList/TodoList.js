import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingStatus, getTodos } from '../../store';
import { loadData } from '../../api';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const isLoading = useSelector(loadingStatus);

  if (!isLoading) {
    if (todos.length) {
      return (
        <div className="content">
          <div className="TodoList">
            <ul className="TodoList__list">
              {todos.map(todo => (
                <li className="TodoList__item">
                  <label htmlFor={todo.id}>
                    <input
                      type="checkbox"
                      id={todo.id}
                      defaultChecked={todo.completed}
                    />
                    {todo.title}
                  </label>
                  <button
                    type="button"
                    onClick={() => dispatch(loadData('user', todo.userId))}
                  >
                    {`User ${todo.userId}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (!todos.length) {
      return (
        <div className="content">
          <p>-</p>
        </div>
      );
    }
  }

  return (
    <div className="content">
      <div className="loader" />
    </div>
  );
};
