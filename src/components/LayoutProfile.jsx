import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderProfile } from './HeaderProfile';

export const LayoutProfile = () => {
  return (
    <div>
      <HeaderProfile />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
