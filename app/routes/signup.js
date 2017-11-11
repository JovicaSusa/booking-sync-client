import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    signUp(user) {
      user.save().
        then(() => this.transitionTo('index')).
        catch(() => {});
    }
  }
});
