import React, { useContext } from 'react';
import Avatar from '@edx/frontend-component-header/dist/Avatar';
import { DesktopUserMenuTogglePropTypes } from '@edx/frontend-component-header/dist/desktop-header/DesktopUserMenuToggle';
import { AppContext } from '@edx/frontend-platform/react';
import { AppContextInterface } from '../types';

export const DropDownToggler = ({ avatar }): { avatar: string } => {
  const { authenticatedUser } = useContext<AppContextInterface>(AppContext);
  return (
    <Avatar size="1.5em" src={avatar} alt={authenticatedUser.username} />
  );
};

DropDownToggler.propTypes = DesktopUserMenuTogglePropTypes;
