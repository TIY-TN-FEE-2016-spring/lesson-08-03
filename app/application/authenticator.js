import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';

export default Loopback.extend({
  loginEndpoint: `https://arcade-tickets.herokuapp.com/api/players/login`,
});
