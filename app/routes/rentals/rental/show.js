import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('rentals.rental');
  },

  actions: {
    deleteBooking(booking) {
      if (confirm('Are you sure that you want to delte this booking?')) {
        booking.destroyRecord().
          then(() => this.flashMessages.success('Booking Deleted'));
      }
    }
  }
});
