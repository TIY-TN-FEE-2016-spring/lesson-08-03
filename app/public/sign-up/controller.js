import Ember from 'ember';

export default Ember.Controller.extend({
  createPlayer(formValues) {
    const player = this.store.createRecord(`player`, formValues);

    player.save();
  },
});
