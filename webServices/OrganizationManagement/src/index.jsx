import React from 'react';

import { OrganizationsStoreProvider } from '@transparansi/store/dist/modules/Organizations';
import Organizations from './Organizations';

export default () => {
  return (
    <OrganizationsStoreProvider>
      <Organizations />
    </OrganizationsStoreProvider>
  );
};
