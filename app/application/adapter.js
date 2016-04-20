import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: `https://arcade-tickets.herokuapp.com`,

  namespace: `api`,
});
