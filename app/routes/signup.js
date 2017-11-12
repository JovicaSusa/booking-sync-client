import Ember from 'ember';

const { inject: { service }, Route } = Ember;

export default Route.extend({
  session: service(),

  model() {
    return this.store.createRecord('user');
  },

  actions: {
    signUp(user) {
      let { username, password } = user.getProperties('username', 'password');

      user.save().
        then(() => {
          return this.get('session').
            authenticate('authenticator:oauth2', username, password);
        }).
        then(() => this.transitionTo('admin')).
        catch(() => {});
    }
  }
});
