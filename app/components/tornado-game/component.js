import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  lights: [1, 2, 3, 4, 5, 6, 7, 8, 9, `jackpot`, 9, 8, 7, 6, 5, 4, 3, 2, 1],

  activeLightPosition: 0,
  isSpinning: false,
  goUp: true,

  speed: 20,

  spin: task(function *() {
    // Start looping
    while (this.isSpinning) {
      // Wait 20ms
      yield timeout(this.speed);
      // set activeLightPosition ++
      if (this.goUp) {
        this.set(`activeLightPosition`, this.activeLightPosition + 1);
      } else {
        this.set(`activeLightPosition`, this.activeLightPosition - 1);
      }

      // or 0 if at the end
      if (this.activeLightPosition >= this.lights.length - 1) {
        this.set(`goUp`, false);
      }
      if (this.activeLightPosition <= 0) {
        this.set(`goUp`, true);
      }
    }
  }),

  startSpinning() {
    this.set(`isSpinning`, true);
    this.get(`spin`).perform();
  },

  stopSpinning() {
    this.set(`isSpinning`, false);
    this.get(`spin`).cancelAll();

    alert(`You win ${this.lights[this.activeLightPosition]} tickets`);
  },
});
