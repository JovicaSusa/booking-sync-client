import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const rental = this.modelFor('rentals.rental');
    return this.store.createRecord('booking', {
      rental: rental
    });
  },

  actions: {
    save(booking) {
      booking.save().
        then(() => {
          this.flashMessages.success('You have succesfuly booked this rental');
          this.transitionTo('rentals.rental.show', booking.get('rental.id'))
        });
    }
  }
});
