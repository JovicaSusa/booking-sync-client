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
        then(() => alert('success'));
    }
  }
});
