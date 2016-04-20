import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login({ email, password }) {
    this.get(`session`).authenticate(`authenticator:application`, email, password)
      .catch((reason) => {
        console.log(reason);
      });
  },
});
