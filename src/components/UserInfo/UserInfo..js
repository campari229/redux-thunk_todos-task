import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getSelectedUser,
  loadingUserStatus,
  userErrorStatus,
  getUserId,
  clearUser,
} from '../../store';
import { loadData } from '../../api';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(getSelectedUser);
  const error = useSelector(userErrorStatus);
  const isLoading = useSelector(loadingUserStatus);
  const userId = useSelector(getUserId);

  if (!user) {
    if (isLoading) {
      return <p className="info">Loading...</p>;
    }

    if (!isLoading && error) {
      return (
        <p className="info">
          Failed loading user
          <button
            onClick={() => dispatch(loadData('user', userId))}
            type="button"
          >
          Reload
          </button>
        </p>
      );
    }

    if (!isLoading) {
      return <p className="info">User is not selected</p>;
    }
  }

  if (user && !user.id) {
    return <p className="info">{`User #${userId} does not exist`}</p>;
  }

  return (
    <p className="info">
      {`User #${user.id} is loaded`}
      <button
        type="button"
        onClick={() => dispatch(clearUser())}
      >
        Clear
      </button>
    </p>
  );
};
