import Avatar from '@edx/frontend-component-header/dist/Avatar';
import { DesktopUserMenuTogglePropTypes } from '@edx/frontend-component-header/dist/desktop-header/DesktopUserMenuToggle';
import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';

export const DropDownToggler = ({ avatar }) => {
  const { authenticatedUser } = useContext(AppContext);
  return (
    <Avatar size="1.5em" src={avatar} alt={authenticatedUser.username} />
  );
};

DropDownToggler.propTypes = DesktopUserMenuTogglePropTypes;
