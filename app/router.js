import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('public', { path: '/' }, function() {
    this.route('sign-up');
    this.route('login');
  });
});

export default Router;
