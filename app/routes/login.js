import Ember from 'ember';

const { inject: { service }, Route } = Ember;

export default Route.extend({
  session: service(),

  model() {
    return Ember.Object.create({
      username: '',
      password: ''
    });
  },

  actions: {
    login(loginModel) {
      const {
        username,
        password
      } = loginModel.getProperties('username', 'password');

      this.get('session').
        authenticate('authenticator:oauth2', username, password).
          then(() => {
            this.get('flashMessages').success('Successful login');
            this.transitionTo('/')
          }).
          catch(() => this.get('flashMessages').danger('Unsucessful login'));

    }
  }
});
