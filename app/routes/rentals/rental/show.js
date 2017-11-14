import Ember from 'ember';

export default Ember.Route.extend({
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
