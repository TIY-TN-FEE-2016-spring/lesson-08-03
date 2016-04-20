import Ember from 'ember';

export function betterDoorNumber([doorNumber]) {
  return doorNumber + 1;
}

export default Ember.Helper.helper(betterDoorNumber);
