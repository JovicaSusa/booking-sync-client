import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  actions: {
    handleSubmit(rental) {
      this.get('onSubmit')(rental)
    }
  }
});
