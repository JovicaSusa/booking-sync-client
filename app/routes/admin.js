import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    deleteRental(rental) {
      rental.destroyRecord().
        then(() => this.flashMessages.success('Rental deleted'));
    }
  }
});
