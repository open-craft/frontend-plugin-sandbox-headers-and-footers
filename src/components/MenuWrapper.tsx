import React, { ReactElement, useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import Avatar from '@edx/frontend-component-header/dist/Avatar';
import { AppContextInterface } from '../types';

export const MenuWrapper = ({ component }: { component: ReactElement }) => {
  const { authenticatedUser } = useContext<AppContextInterface>(AppContext);
  return (
    <>
      <div className="dropdown-header profile-label" role="heading" aria-level={1}>
        <div className="d-flex">
          <Avatar size="1.5rem" />
          <div className="pl-2 align-self-center">{authenticatedUser.username}</div>
        </div>
      </div>
      <div className="dropdown-divider" />
      {component}
    </>
  );
};
