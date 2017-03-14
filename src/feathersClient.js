import feathers from 'feathers-client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import authentication from 'feathers-authentication-client';

const host = 'http://localhost:3030';

export default feathers()
  .configure(hooks())
  .configure(rest(host).fetch(window.fetch.bind(window)))
  .configure(authentication({
    jwtStrategy: 'jwt',
    storage: window.localStorage,
  }));
