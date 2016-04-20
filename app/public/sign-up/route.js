import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      email: ``,
      password: ``,
      username: ``,
      tickets: 0,
    };
  },
});
