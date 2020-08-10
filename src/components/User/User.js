import React from 'react';

import { useSelector } from 'react-redux';

import {
  getSelectedUser,
  loadingUserStatus,
} from '../../store';

export const User = () => {
  const user = useSelector(getSelectedUser);
  const isLoading = useSelector(loadingUserStatus);

  if (!isLoading) {
    if (user && user.id) {
      return (
        <div className="content content--user">
          <div className="CurrentUser">
            <strong>Selected user:</strong>
            <ul>
              <li>{`#${user.id}`}</li>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
            </ul>
          </div>
        </div>
      );
    }

    if (!user || !user.id) {
      return (
        <div className="content content--no-user">
          <p>-</p>
        </div>
      );
    }
  }

  return (
    <div className="content content--user">
      <div className="loader" />
    </div>
  );
};
