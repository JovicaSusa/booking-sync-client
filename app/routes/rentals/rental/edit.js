import Ember from 'ember';

export default Ember.Route.extend({
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
