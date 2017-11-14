import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('booking', params.booking_id);
  },

  actions: {
    save(booking) {
      booking.save().
        then(() => {
          this.transitionTo('rentals.rental.show', booking.get('rental.id'));
          this.flashMessages.success('Booking successfully deleted');
        })
    }
  }
});
