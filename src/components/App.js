import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';

import feathersClient from '../feathersClient';
import * as projects from './Projects';
import * as tasks from './Tasks';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' },
};

const App = () => (
  <Admin
    authClient={authClient(feathersClient, authClientOptions)}
    restClient={restClient(feathersClient)}
  >
    <Resource name="projects" {...projects} />
    <Resource name="tasks" {...tasks} />
  </Admin>
);

export default App;
