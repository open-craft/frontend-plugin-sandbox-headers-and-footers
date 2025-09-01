import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { ensureConfig } from '@edx/frontend-platform';

ensureConfig([
  'LOGO_WHITE_URL',
], 'White Header Logo');

export const WhiteLogo = () => {
  const { config } = useContext(AppContext);
  return (
    <a className="logo" href={`${config.LMS_BASE_URL}/dashboard`}>
      <img className="d-block" src={config.LOGO_WHITE_URL} alt={config.SITE_NAME} />
    </a>
  );
};
