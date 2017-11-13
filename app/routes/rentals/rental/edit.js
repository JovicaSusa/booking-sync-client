import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('rentals.rental');
  },

  actions: {
    save(rental) {
      rental.save().
        then(() => this.transitionTo('admin'));
    }
  }
});
