import Ember from 'ember';
import lodash from 'lodash/lodash';

export default Ember.Component.extend({
  gameStarted: false,
  winningDoor: false,
  userChoice: false,
  eliminated: false,
  switchChoice: false,

  userChooseDoor(doorNumber) {
    // Randomize winner and assign door numbers
    this.set(`winningDoor`, lodash.random(0, 2));
    this.set(`userChoice`, doorNumber);

    const doors = lodash.range(0, 3); // [0,1,2]
    // Figure out which doors are losers and not chosen
    const remaining = doors.filter((door) => {
      return !(door === doorNumber || door === this.get(`winningDoor`));
    });

    // Pick a random remaining door
    this.set(`eliminated`, lodash.sample(remaining));

    // Figure out which door wasn't the user choice OR the Eliminated door
    this.set(`switchChoice`, doors.filter((door) => {
      return !(door === this.get(`userChoice`) || door === this.get(`eliminated`));
    })[0]);
  },

  userStays() {
    this.decideEndGame(this.get(`userChoice`));
  },

  userSwitches() {
    this.decideEndGame(this.get(`switchChoice`));
  },

  decideEndGame(doorNumber) {
    if (doorNumber === this.get(`winningDoor`)) {
      alert(`You win`);
      // Something about winning!
    } else {
      alert(`You have chosen... Poorly...`);
      // Something about losing...
    }

    this.reset();
  },

  reset() {
    this.setProperties({
      gameStarted: null,
      winningDoor: null,
      userChoice: null,
      eliminated: null,
      switchChoice: null,
    });
  },
});
